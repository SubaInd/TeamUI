FROM node:12.16.1 AS builder

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm i
COPY . .
RUN npm run build



FROM nginx:1.15.8-alpine
COPY --from=builder /app/dist/Qbthoncodes/ /usr/share/nginx/html