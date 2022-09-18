# GENERATE IMAGE: DOCKER_BUILDKIT=0 docker build -t techverso/microservice-hexagonal:v0.0.1 . 
FROM node:17.0-alpine3.14

WORKDIR /app

COPY nest-cli.json package.json tsconfig.json tsconfig.build.json ./
COPY src/ ./src

RUN npm install \
  && npm run build \
  && rm -rf src/

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start:prod" ]
