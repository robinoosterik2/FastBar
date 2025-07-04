## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
[Docs](https://docs.nestjs.com)

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Migrate

```bash
$ pnpm run migration:generate src/migrations/<FILENAME>
$ pnpm run migration:run
$ pnpm run migration:revert
```

## Easily create CRUD

To quickly create a CRUD controller with built-in validation, you can use the CLI's CRUD generator:

```bash
$ nest g resource [name]
```

### SUB DOMAINS

https://stackoverflow.com/questions/19016553/add-subdomain-to-localhost-url

https://docs.nestjs.com/controllers#sub-domain-routing

### watch out for role guard with web sockets

https://docs.nestjs.com/guards#binding-guards
