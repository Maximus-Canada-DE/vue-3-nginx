FROM node:17 AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginxinc/nginx-unprivileged
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]