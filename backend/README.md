# Awards Backend
## Built with
- Node Version v14.19.1
- Express.js v4.16.1
- Sequelize ORM v6.19.0
- PostgreSQL Database v10.18
## Database Details
- Table Users (id, email, createdAt, updatedAt)
- Table Awards (id, name, type, exchange_point, image, createdAt, updatedAt)
# How to section
## How to migrate and seed data to database
- Inside config folder, copy config.json.sample to config.json
- Set to your database credential
- To Migrate models run migrate script below
```bash
npx sequelize-cli db:migrate
```
- After all table created, run seed script below
```bash
npx sequelize-cli db:seed:all
```

## How to run backend
- Copy .env.sample to .env
- Fill all env value with your db credential
- Run script below to start backend
```bash
npm start
```