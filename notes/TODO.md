### Backend

#### Features

##### DB

- [ ] Maybe add Tree to Category but it is not very far down so not worth it probably.
- [x] Add soft delete, https://typeorm.io/docs/working-with-entity-manager/find-options, @DeleteDateColumn
- [ ] Add anonymize data
- [ ] Add cascades.
- [ ] Add cashing?.
- [x] Prob Fix json
- [x] Create BaseModel
- [ ] Add WebSockets
- [ ] Add role guard to routes
- [ ] Update github action to optimize, (install eslint only once if possible)
- [ ] Link Owners and barkeepers to venue
- [ ] in seeder category add parent and child categories
- [ ] Fix joinTable for relations

###### Seeders:

- [ ] ProductSeeder (for src/product/entities/product.entity.ts)
- [ ] BarSeeder (for src/bar/entities/bar.entity.ts)
- [ ] AuditLogSeeder (for src/audit-log/entities/audit-log.entity.ts)
- [ ] InventoryTransactionSeeder (for src/inventory-transaction/entities/inventory-transaction.entity.ts)
- [ ] OrderProductSeeder (for src/order-product/entities/order-product.entity.ts)
- [ ] OrderSeeder (for src/order/entities/order.entity.ts)
- [ ] PaymentSeeder (for src/payment/entities/payment.entity.ts)
- [ ] ProductToBarSeeder (for src/product-to-bar/entities/productToBar.entity.ts)
- [ ] SettingsSeeder (for src/users/entities/settings.entity.ts)

##### Creating migrations

https://typeorm.io/docs/advanced-topics/migrations

##### Testing

- [ ] Add tests for all endpoints
- [ ] Add tests for all services
- [ ] Add tests for all repositories

### Frontend

- [ ] add documentation (readme)
- [ ] Make it for mobile

#### Features

#### Research

- [ ] Find out how to connect to already existing POS software
- [ ] Create own POS software?
