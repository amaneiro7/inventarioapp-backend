FROM node:22-alpine3.20 AS base
ENV DIR=/app
WORKDIR $DIR

# Instalamos pnpm de forma nativa con Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# --- Etapa 2: Deps (Instalación de todo) ---
FROM base AS deps
# Instalamos dependencias de sistema solo aquí
COPY package.json pnpm-lock.yaml* ./
RUN pnpm config set node-linker hoisted && \
    npm pkg delete scripts.prepare
# Instalamos TODO (incluye devDeps para el build)
RUN pnpm install --frozen-lockfile || pnpm install
    
    # --- Etapa 3: Build ---
FROM base AS builder
COPY --from=deps $DIR/node_modules ./node_modules
COPY tsconfig*.json .
COPY . .
# Ejecuta el script de build
RUN npm pkg delete scripts.prepare
RUN pnpm run build
RUN pnpm prune --prod

# --- Etapa 4: Runner (Imagen Final) ---
FROM base AS runner
ENV NODE_ENV=production
# Instalamos dumb-init y dependencias de sistema necesarias en runtime
RUN apk add --no-cache dumb-init=1.2.5-r3 tzdata
ENV TZ=America/Caracas
RUN cp /usr/share/zoneinfo/America/Caracas /etc/localtime
# Creamos directorio de logs y ajustamos permisos
RUN mkdir -p $DIR/logs && chown -R node:node $DIR

# Copiamos solo lo necesario con el dueño correcto
COPY --from=builder --chown=node:node $DIR/node_modules ./node_modules
COPY --from=builder --chown=node:node $DIR/dist ./dist
COPY --from=builder --chown=node:node $DIR/package.json ./package.json


USER node

EXPOSE $PORT
# Ejecutamos directamente con node
# Usamos dumb-init para manejar señales de terminación (SIGTERM)
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD [ "node", "dist/src/apps/start.js" ]
# CMD [ "dumb-init", "node", "dist/src/apps/start.js" ]