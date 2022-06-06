FROM node:17 AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:1.17
COPY ./nginx.conf /etc/nginx/nginx.conf
WORKDIR /code
COPY --from=builder /app/dist .
EXPOSE 80:8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]