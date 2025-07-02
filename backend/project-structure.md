src/
├── app.module.ts
├── main.ts
│
├── common/
│   ├── decorators/
│   ├── guards/
│   ├── interceptors/
│   ├── filters/
│   ├── exceptions/
│   ├── pipes/
│   ├── utils/
│   └── constants/
│
├── config/
│   ├── app.config.ts
│   ├── database.config.ts
│   ├── auth.config.ts
│   └── config.module.ts
│
├── core/  # Optional: core interfaces for domain logic
│   ├── interfaces/
│   ├── enums/
│   └── base/
│       ├── base.entity.ts
│       └── base.repository.ts
│
├── modules/
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── strategies/
│   │   ├── guards/
│   │   └── dto/
│   │
│   ├── users/
│   │   ├── users.module.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.repository.ts
│   │   ├── users.entity.ts
│   │   └── dto/
│   │
│   ├── roles/
│   │   ├── roles.module.ts
│   │   ├── roles.service.ts
│   │   ├── roles.controller.ts
│   │   └── roles.entity.ts
│   │
│   └── any-feature/
│       ├── feature.module.ts
│       ├── feature.service.ts
│       ├── feature.controller.ts
│       ├── feature.entity.ts
│       ├── feature.repository.ts
│       └── dto/
│
├── database/
│   ├── prisma/              # or typeorm/sequelize/etc
│   │   ├── prisma.service.ts
│   │   └── schema.prisma
│   └── migrations/
│
├── middleware/
│   └── logger.middleware.ts
│
├── permissions/
│   ├── casl/
│   └── rbac/
│
└── types/
    └── global.d.ts

test/
├── e2e/
├── unit/
└── setup.ts

.env
.env.dev
.env.prod
tsconfig.json
package.json
