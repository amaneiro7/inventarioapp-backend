FROM node:20-alpine AS base
WORKDIR /usr/src/app
RUN corepack enable

# --- Etapa de Dependencias (Dev + Prod) ---
# Instalamos todo para poder compilar TypeScript
FROM base AS deps
# Instalar herramientas de compilación para bcrypt (python3, make, g++)
RUN apk add --no-cache python3 make g++
COPY package.json pnpm-lock.yaml* ./
# Eliminamos el script prepare para evitar que husky falle en Docker
RUN npm pkg delete scripts.prepare
# Usamos node-linker=hoisted para evitar problemas de symlinks al copiar node_modules
RUN pnpm config set node-linker hoisted
RUN pnpm install --frozen-lockfile || pnpm install

# --- Etapa de Dependencias de Producción ---
# Instalamos solo lo necesario para correr la app (ahorra espacio)
FROM base AS production-deps
# Instalar herramientas de compilación para bcrypt
RUN apk add --no-cache python3 make g++
COPY package.json pnpm-lock.yaml* ./
# Eliminamos el script prepare para evitar que husky falle en Docker
RUN npm pkg delete scripts.prepare
RUN pnpm config set node-linker hoisted
RUN pnpm install --prod --frozen-lockfile || pnpm install --prod

# --- Etapa de Build ---
FROM base AS builder
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
# Ejecuta el script de build
RUN pnpm run build

# --- Etapa Final de Producción ---
FROM base AS runner
ENV NODE_ENV=production

# Copiamos node_modules de producción y la carpeta dist compilada
COPY --from=production-deps /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY package.json ./

EXPOSE 3000
# Ejecutamos directamente con node
CMD [ "node", "dist/src/apps/start.js" ]