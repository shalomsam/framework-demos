FROM node:22-alpine

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build
RUN pnpm rebuild esbuild

EXPOSE 5173
CMD ["pnpm", "run", "dev", "--host=0.0.0.0"]