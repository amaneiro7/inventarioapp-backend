# syntax=docker/dockerfile:1.4
FROM node:24-alpine3.24 AS base
ENV DIR=/app
WORKDIR $DIR

# Fijamos la versión exacta de pnpm para evitar peticiones de red innecesarias
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@11.21.0 --activate

# --- Etapa 2: Deps (Instalación de todas las dependencias para compilar) ---
FROM base AS deps
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml .npmrc ./
RUN npm pkg delete scripts.prepare

# Usamos caché de BuildKit para la tienda de pnpm (descarga ultra rápida)
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile || pnpm install

# --- Etapa 3: Prod-Deps (Solo dependencias de producción para el runtime) ---
FROM base AS prod-deps
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml .npmrc ./
RUN npm pkg delete scripts.prepare

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
pnpm install --prod --frozen-lockfile || pnpm install --prod

# --- Etapa 4: Builder (Compilación de TypeScript) ---
FROM base AS builder
COPY --from=deps $DIR/node_modules ./node_modules
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml .npmrc ./
COPY tsconfig*.json ./
COPY src ./src

# Compila TypeScript
RUN pnpm run build

# --- Etapa 5: Runner (Imagen Final de Producción) ---
FROM base AS runner
ENV NODE_ENV=production
ENV TZ=America/Caracas

# Instalamos dumb-init y zona horaria
RUN apk add --no-cache dumb-init=1.2.5-r4 tzdata && \
    cp /usr/share/zoneinfo/America/Caracas /etc/localtime && \
    mkdir -p $DIR/logs && chown -R node:node $DIR/logs

# Copiamos solo los node_modules de producción y el código transpilado
COPY --from=prod-deps --chown=node:node $DIR/node_modules ./node_modules
COPY --from=builder --chown=node:node $DIR/dist ./dist
COPY --from=builder --chown=node:node $DIR/package.json ./package.json

USER node

EXPOSE $PORT

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD [ "node", "dist/src/apps/start.js" ]