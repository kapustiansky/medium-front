FROM node:24-bookworm

RUN apt-get update && apt-get install -y \
    git \
    curl \
    bash \
    procps \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
RUN mkdir -p /app/node_modules /app/.next \
    && chown -R node:node /app

RUN git config --global --add safe.directory /app \
    && git config --global --add safe.directory /app

USER node

WORKDIR /app

EXPOSE 3000
