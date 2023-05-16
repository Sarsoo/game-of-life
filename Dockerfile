FROM rust:1.69 AS rust-build

RUN  curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

COPY . /gof
WORKDIR /gof

RUN wasm-pack build --release
RUN cargo doc --no-deps --document-private-items

FROM node:18-alpine AS js-build

COPY . /gof
WORKDIR /gof

COPY --from=rust-build /gof/pkg /gof/pkg
WORKDIR /gof/www
RUN npm ci
RUN npm run build --if-present
COPY --from=rust-build /gof/target/doc /gof/www/dist/

FROM nginx:alpine-slim
COPY --from=js-build /gof/www/dist /usr/share/nginx/html/