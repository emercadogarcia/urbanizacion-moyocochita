FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Etiquetas de administración
LABEL project="Moyocochita-pageWeb"
LABEL maintainer="Edgar Mercado (Lucho)"

# Instalamos solo herramientas de sistema esenciales
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
&& apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Actualizamos npm para evitar problemas de permisos
RUN npm install -g npm@latest

# Sincronización con el estándar plural de devcontainers
WORKDIR /workspace

EXPOSE 3010