# Inventario App Backend

![Version](https://img.shields.io/badge/version-3.0.0-blue)  
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![TypeScript](https://img.shields.io/badge/typescript-5.8-blue)

Sistema integral de gestión de inventario y monitoreo de infraestructura TI, diseñado bajo los principios de **Domain-Driven Design (DDD)**, **Arquitectura Hexagonal (Clean Architecture)** y **Arquitectura Orientada a Eventos (EDA)**.

---

## Tabla de Contenidos

- [Visión General](#visión-general)
- [Características Clave](#características-clave)
- [Arquitectura del Sistema](#arquitectura-del-sistema)
- [Pila Tecnológica](#pila-tecnológica)
- [Primeros Pasos](#primeros-pasos)
    - [Prerrequisitos](#prerrequisitos)
    - [Instalación](#instalación)
    - [Configuración de Entorno](#configuración-de-entorno)
    - [Base de Datos y Migraciones](#base-de-datos-y-migraciones)
    - [Ejecutar el Servidor](#ejecutar-el-servidor)
    - [Entorno Docker](#entorno-docker)
- [Event Bus y Resiliencia (RabbitMQ + Mongo)](#event-bus-y-resiliencia-rabbitmq--mongo)
- [Estrategia de Caché e Invalidación](#estrategia-de-caché-e-invalidación)
- [Monitoreo de Infraestructura](#monitoreo-de-infraestructura)
- [Scripts Disponibles](#scripts-disponibles)
- [Documentación de la API](#documentación-de-la-api)
- [Licencia y Autor](#licencia-y-autor)

---

## Visión General

Inventario App Backend gestiona de manera centralizada el ciclo de vida de los activos tecnológicos, asignaciones a empleados, estructura organizacional y monitoreo en tiempo real de la conectividad de dispositivos y sedes.

Está estructurado para ser altamente desacoplado, escalable y tolerante a fallos, permitiendo evolucionar módulos internos hacia microservicios o workers independientes con mínimo esfuerzo.

---

## Características Clave

- **Gestión de Activos TI:** Registro, fichas técnicas, movimientos y estados de computadoras, impresoras, servidores y componentes.
- **Estructura Organizacional y Empleados:** Control de personal, cargos, departamentos y jerarquía de sedes.
- **Historial y Trazabilidad:** Auditoría automática de cambios (creación, edición, asignación y desvinculación) mediante eventos de dominio.
- **Monitoreo de Red:** Sondeo periódico (ping ICMP) a dispositivos y sedes críticas con generación de métricas y dashboards.
- **Control de Acceso (RBAC):** Autenticación mediante JWT, Passport.js y políticas de permisos granulares.

---

## Arquitectura del Sistema

El proyecto implementa una **Arquitectura Hexagonal (Puertos y Adaptadores)** dividida en Contextos Delimitados (_Bounded Contexts_):

- **Domain:** Entidades, Value Objects, eventos de dominio e interfaces de repositorios (sin dependencias externas).
- **Application:** Casos de uso y orquestación de la lógica de negocio.
- **Infrastructure:** Implementaciones concretas (Sequelize/PostgreSQL, Redis, RabbitMQ, MongoDB, Winston, etc.).
- **Apps:** Controladores Express, middlewares, inyección de dependencias (Awilix) y configuración de servidores.

---

## Pila Tecnológica

- **Lenguaje:** TypeScript 5.8 (Node.js / Bun compatible)
- **Servidor HTTP:** Express.js 4.x
- **Base de Datos Principal:** PostgreSQL 16 (ORM: Sequelize)
- **Caché Distribuida:** Redis 7
- **Broker de Mensajería:** RabbitMQ 3 (AMQP 0-9-1 con Topic Exchanges)
- **Failover / Event Store:** MongoDB
- **Inyección de Dependencias:** Awilix
- **Autenticación:** Passport.js (JWT & Local Strategy) + Cookies firmadas
- **Testing:** Jest + `ts-jest`
- **Linter & Formato:** ESLint + Prettier + Husky (`lint-staged`)

---

## Primeros Pasos

### Prerrequisitos

- **Node.js** v18+ o **Bun** v1.0+
- **pnpm** (recomendado), npm o yarn
- **PostgreSQL**, **Redis**, **RabbitMQ** y **MongoDB** (o Docker para levantarlos juntos)

### Instalación

```bash
git clone https://github.com/amaneiro7/inventarioapp-backend.git
cd inventarioapp-backend
pnpm install
```

### Configuración de Entorno

Copia el archivo base y define tus credenciales:

```bash
cp .env.example .env.development
```

Variables clave requeridas:

- `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST`, `POSTGRES_DB`
- `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`
- `RABBITMQ_HOST`, `RABBITMQ_PORT`, `RABBITMQ_USER`, `RABBITMQ_PASSWORD`
- `MONGO_URL` (para el mecanismo de tolerancia a fallos)
- `ACCESS_TOKEN_SECRET`, `REFRESH_TOKEN_SECRET`

### Base de Datos y Migraciones

```bash
# Ejecutar migraciones pendientes
pnpm migration:all

# Poblar con datos iniciales (Seeds)
pnpm seed:all
```

### Ejecutar el Servidor

```bash
# Modo desarrollo con Node (recarga en caliente con tsx):
pnpm dev:node

# Modo desarrollo con Bun:
pnpm dev:bun

# Compilación y producción:
pnpm build
pnpm start
```

### Entorno Docker

Para desplegar la infraestructura completa con Docker Compose:

```bash
docker-compose up -d
```

Servicios expuestos:

- **API Backend:** Puerto 3000 / 5000
- **RabbitMQ Management UI:** `http://localhost:15672`
- **PostgreSQL:** Puerto 5430 (mapeado a 5432)
- **Redis:** Puerto 6379
- **MongoDB:** Puerto 27017

---

## Event Bus y Resiliencia (RabbitMQ + Mongo)

La comunicación asíncrona entre módulos se realiza mediante eventos de dominio (`DomainEvent`):

1. **Exchange Topic:** Los eventos se publican en el exchange `inventoryapp-events` usando su nombre como routing key (ej. `device.updated`).
2. **Colas de Reintento y Dead-Letter:** Cada suscriptor cuenta con su propia cola de procesamiento, una cola con TTL para reintentos progresivos (`retry.*`) y una cola de mensajes descartados (`dead_letter.*`).
3. **Failover a MongoDB:** Si el broker de RabbitMQ no está disponible, el publicador almacena automáticamente los eventos en una colección de MongoDB (`DomainEvents`) para garantizar que ningún cambio de estado se pierda.

---

## Estrategia de Caché e Invalidación

- Se implementa un servicio de caché basado en Redis con TTLs ajustados a la volatilidad de cada dato (cortos para listas operativas, largos para dashboards).
- **Invalidación dirigida por eventos:** Al registrar cambios de estado, suscriptores especializados (`GenericCacheInvalidator`) purgan automáticamente las claves de búsqueda, listas y dashboards afectados por patrón (_wildcard_).

---

## Scripts Disponibles

| Script                  | Descripción                                     |
| :---------------------- | :---------------------------------------------- |
| `pnpm dev:node`         | Servidor en modo desarrollo con `tsx watch`     |
| `pnpm dev:bun`          | Servidor en desarrollo con `bun --watch`        |
| `pnpm build`            | Compila TypeScript a JavaScript en `/dist`      |
| `pnpm start`            | Inicia el servidor compilado en producción      |
| `pnpm test`             | Ejecuta la suite de pruebas unitarias con Jest  |
| `pnpm format`           | Formatea el código fuente con Prettier          |
| `pnpm lint`             | Analiza el código con ESLint                    |
| `pnpm lint:fix`         | Corrige problemas de estilo y reglas con ESLint |
| `pnpm migration:all`    | Ejecuta todas las migraciones de Sequelize      |
| `pnpm seed:all`         | Ejecuta los seeders para datos iniciales        |
| `pnpm docker:dev:reset` | Detiene contenedores locales y purga volúmenes  |

---

## Documentación de la API

Con el servidor encendido, puedes acceder a la documentación interactiva Swagger en:
http://localhost:PORT/api-docs

_(Reemplaza `PORT` con el configurado en tu `.env`, por defecto `3000`)._

---

## Licencia

Distribuido bajo la Licencia MIT. Consulta `LICENSE` para más información.

**Autor:** Andres Maneiro ([amaneiro7@gmail.com](mailto:amaneiro7@gmail.com))
