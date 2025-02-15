FROM node:lts AS build

LABEL version="0.0.1"
LABEL descripttion="Ultra-Coins Website"
LABEL maintainer="Ultra-Coins"

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
