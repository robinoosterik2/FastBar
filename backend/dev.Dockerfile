FROM node:20

WORKDIR /app
RUN npm install -g pnpm@latest-10
COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

CMD [ "pnpm", "run", "start:dev" ]