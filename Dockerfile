FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
COPY bun.lock ./

RUN bun install

COPY . .

EXPOSE 3000

RUN bun run build

CMD ["bun", "start"]