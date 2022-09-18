FROM node:17.0-alpine3.14

WORKDIR /app

COPY nest-cli.json package.json tsconfig.json tsconfig.build.json ./
COPY src/ ./src

RUN ls -la
RUN ls -la src/

RUN npm install \
  && npm run build

RUN ls -la 
RUN rm -rf src/
RUN ls -la 

RUN ls -la dist/

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start:prod" ]
