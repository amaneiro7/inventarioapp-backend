# Inventario App Backend

![Version](https://img.shields.io/badge/version-2.0.0-blue)  
![License](https://img.shields.io/badge/license-MIT-green)

Un sistema integral de gestión de inventario diseñado para rastrear y administrar activos de TI, información de empleados y la estructura organizacional.

## Tabla de Contenidos

- [Visión General](#visión-general)
- [Características Clave](#características-clave)
- [Arquitectura del Sistema](#arquitectura-del-sistema)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Primeros Pasos](#primeros-pasos)
    - [Prerrequisitos](#prerrequisitos)
    - [Instalación](#instalación)
    - [Configuración de Variables de Entorno](#configuración-de-variables-de-entorno)
    - [Migraciones y Seeds de Base de Datos](#migraciones-y-seeds-de-base-de-datos)
    - [Ejecutar Pruebas](#ejecutar-pruebas)
    - [Iniciar el Servidor](#iniciar-el-servidor)
    - [Configuración con Docker](#configuración-con-docker)
- [Scripts Disponibles](#scripts-disponibles)
- [Documentación de la API](#documentación-de-la-api)
- [Monitoreo de Dispositivos y Ubicaciones](#monitoreo-de-dispositivos-y-ubicaciones)
- [Modelo de Dominio Central](#modelo-de-dominio-central)
- [Estrategia de Caché](#estrategia-de-caché)
- [Versionado y Lanzamientos](#versionado-y-lanzamientos)
- [Licencia](#licencia)
- [Autor](#autor)

## Visión General

Inventario App Backend es una plataforma robusta para mantener registros detallados de dispositivos informáticos, monitorear sus asignaciones, rastrear ubicaciones y generar informes para fines de inteligencia de negocios. El sistema sigue un enfoque de arquitectura hexagonal/limpia basado en principios de Domain-Driven Design (DDD), asegurando un código desacoplado, mantenible y escalable.

## Características Clave

- **Gestión de Activos de TI:** Rastrea equipos informáticos con especificaciones detalladas (computadoras, laptops, impresoras, monitores, etc.).
- **Gestión de Empleados y Estructura Organizacional:** Administra la información de los empleados y la jerarquía organizacional (cargos, departamentos, centros de costo, etc.).
- **Gestión de Ubicaciones:** Registra y administra ubicaciones geográficas, sitios y sus estados operacionales.
- **Reportes y Dashboards:** Genera informes detallados y dashboards interactivos para facilitar la toma de decisiones.
- **Historial y Auditoría:** Mantiene registros históricos de todos los cambios de inventario para trazabilidad.
- **Monitoreo de Conectividad:** Monitorea el estado de conectividad (ping) de dispositivos y ubicaciones clave.

## Arquitectura del Sistema

La aplicación sigue un patrón de arquitectura limpia con capas claramente separadas, lo que promueve la modularidad, la testabilidad y la independencia de la infraestructura:

- **Capa de API:** Maneja las solicitudes/respuestas HTTP a través de rutas y controladores de Express.
- **Capa de Aplicación:** Implementa los casos de uso y los servicios de aplicación, orquestando la lógica de negocio.
- **Capa de Dominio:** Contiene la lógica de negocio central, entidades, Value Objects y las interfaces de repositorio, siendo el corazón de la aplicación.
- **Capa de Infraestructura:** Proporciona las implementaciones concretas para la persistencia de datos (bases de datos), el almacenamiento en caché y la integración con servicios externos.

## Tecnologías Utilizadas

- **Servidor**: Express.js
- **ORM**: Sequelize
- **Autenticación**: Passport.js con JWT
- **Caché**: Redis
- **Base de Datos**: PostgreSQL
- **Inyección de Dependencias**: Awilix
- **Logging**: Winston
- **Validación**: Express Validator, Zod
- **Seguridad**: Helmet
- **Monitoreo de Procesos**: `node-cron`, `p-limit`

## Primeros Pasos

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v16+ recomendado)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Bun](https://bun.sh/) (opcional, para un desarrollo más rápido)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/) (opcional, para un entorno de desarrollo aislado)

### Instalación

1.  Clona el repositorio:

    ```bash
    git clone https://github.com/amaneiro7/inventarioapp-backend.git
    cd inventarioapp-backend
    ```

2.  Instala las dependencias del proyecto usando tu gestor de paquetes preferido:
    ```bash
    npm install
    # o
    pnpm install
    # o
    bun install
    ```

### Configuración de Variables de Entorno

Copia el archivo de ejemplo de variables de entorno y edítalo con tu configuración:

```bash
cp .env.example .env.development
```

Edita el archivo `.env.development` para configurar las credenciales de tu base de datos, Redis, secretos de JWT y otras configuraciones necesarias.

### Migraciones y Seeds de Base de Datos

Ejecuta las migraciones para configurar el esquema de la base de datos:

```bash
npm run migration:all
```

Opcionalmente, puedes poblar la base de datos con datos iniciales (seeds):

```bash
npm run seed:all
```

### Ejecutar Pruebas

Actualmente, no hay un framework de pruebas configurado. Se recomienda configurar [Jest](https://jestjs.io/) para pruebas unitarias y de integración.

### Iniciar el Servidor

Para iniciar el servidor en modo desarrollo (con recarga en caliente):

```bash
npm run dev:node
# o
bun run dev:bun
```

Para iniciar el servidor en modo producción (después de compilar):

```bash
npm run start
# o
bun run start:bun
```

### Configuración con Docker

También puedes usar Docker para levantar el entorno completo (base de datos, Redis y la aplicación):

```bash
docker-compose up -d
```

## Scripts Disponibles

- `npm run build`: Compila el proyecto TypeScript a JavaScript.
- `npm run clean`: Limpia los archivos de salida de la compilación.
- `npm run start`: Inicia el servidor en modo producción (usando Node.js).
- `npm run start:bun`: Inicia el servidor en modo producción (usando Bun).
- `npm run dev:node`: Inicia el servidor en modo desarrollo con Node.js (con `nodemon`).
- `npm run dev:bun`: Inicia el servidor en modo desarrollo con Bun (con `bun --watch`).
- `npm run format`: Formatea el código fuente usando Prettier.
- `npm run swagger`: Genera la documentación de Swagger (usando `swagger-autogen`, aunque la API usa `swagger-jsdoc`).
- `npm run migration:generate --name [nombre]`: Genera un nuevo archivo de migración de Sequelize.
- `npm run migration:all`: Ejecuta todas las migraciones pendientes de la base de datos.
- `npm run migration:undo`: Deshace la última migración ejecutada.
- `npm run migration:undo:all`: Deshace todas las migraciones.
- `npm run migration:prod:all`: Ejecuta migraciones en entorno de producción.
- `npm run migration:prod:undo`: Deshace la última migración en entorno de producción.
- `npm run seed:all`: Ejecuta todos los archivos seed para poblar la base de datos.
- `npm run seed:undo`: Deshace el último seed ejecutado.
- `npm run seed:undo:all`: Deshace todos los seeds.
- `npm run seed:prod:all`: Ejecuta seeds en entorno de producción.
- `npm run seed:prod:undo`: Deshace seeds en entorno de producción.
- `npm run seed:generate --name [nombre]`: Genera un nuevo archivo seed.

## Documentación de la API

La documentación interactiva de la API, generada con Swagger UI, está disponible en la siguiente ruta cuando el servidor está en ejecución:

[http://localhost:PORT/api-docs](http://localhost:PORT/api-docs)

(Reemplaza `PORT` con el puerto configurado para tu aplicación, por defecto `3000`).

## Monitoreo de Dispositivos y Ubicaciones

El sistema incluye un módulo de monitoreo que realiza pings periódicos a dispositivos y ubicaciones con direcciones IP configuradas. Los resultados de estos pings se registran en archivos de log diarios, separados por tipo (dispositivo o ubicación), y se mantienen los logs de los últimos 3 días en la carpeta `logs/ping`.

## Modelo de Dominio Central

El sistema gestiona varias entidades clave, incluyendo:

- Dispositivos (computadoras, monitores, impresoras, etc.)
- Empleados y su estructura organizacional (cargos, departamentos, directivas, vicepresidencias)
- Ubicaciones y su jerarquía geográfica (regiones, estados, ciudades, sitios, tipos de sitio)
- Gestión de usuarios y control de acceso (roles)
- Historial y seguimiento de auditoría
- Componentes de hardware (tipos de disco duro, capacidades, tipos de RAM, procesadores, sockets)
- Modelos y series de dispositivos
- Sistemas operativos y sus arquitecturas

## Estrategia de Caché

El sistema implementa un sofisticado mecanismo de caché utilizando Redis para optimizar el rendimiento:

- Las consultas a dashboards y datos frecuentemente accedidos se almacenan en caché con un TTL (Time To Live) corto.
- La invalidación de la caché ocurre automáticamente cuando los datos correspondientes son actualizados.
- Se utilizan diferentes TTLs basados en la volatilidad de los datos para asegurar la frescura y el rendimiento.

## Versionado y Lanzamientos

Para gestionar el versionado del proyecto y automatizar la actualización de la versión en `package.json`, puedes utilizar las siguientes herramientas:

- **`npm version` (integrado en npm):** Permite actualizar la versión del proyecto y crear un commit/tag de Git. Por ejemplo:

    ```bash
    npm version major   # Incrementa la versión mayor (ej. 1.0.0 -> 2.0.0)
    npm version minor   # Incrementa la versión menor (ej. 1.0.0 -> 1.1.0)
    npm version patch   # Incrementa la versión de parche (ej. 1.0.0 -> 1.0.1)
    ```

    Este comando también actualiza el `version` en `package.json` y crea un tag de Git.

- **`standard-version` (recomendado para automatización):** Una herramienta más completa que automatiza el versionado, la generación de CHANGELOG y la creación de tags de Git, siguiendo las convenciones de Conventional Commits. Para usarlo, primero instálalo como `devDependency`:
    ```bash
    npm install --save-dev standard-version
    # o
    pnpm add -D standard-version
    ```
    Luego, puedes añadir un script a tu `package.json`:
    ```json
    "scripts": {
      "release": "standard-version"
    }
    ```
    Y ejecutarlo con `npm run release`.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## Autor

Andres Maneiro <amaneiro7@gmail.com>
