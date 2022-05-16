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

# REST API

The REST API to the awards backend app is described below.

## Login

### Request

`POST /api/v1/auth/login`

    curl --location --request POST 'localhost:3030/api/v1/auth/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{ "email": "muhammad.irfan.reza@gmail.com" }'

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json

    {
    "success": true,
    "message": "Login success",
    "data": {
        "id": 1,
        "email": "muhammad.irfan.reza@gmail.com",
        "createdAt": "2022-05-15T14:44:56.442Z",
        "updatedAt": "2022-05-15T14:44:56.442Z"
    },
    "meta": {}
}

## Get Awards List

### Request

`POST /api/v1/awards?page=1&limit=5`

    curl --location --request POST 'localhost:3030/api/v1/awards?page=1&limit=5' \
    --header 'Content-Type: application/json' \
    --data-raw '{ "types": ["Vouchers"], "point_range": { "min": 0, "max": 500000 } }'

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json

    {
    "success": true,
    "message": "Get all awards success",
    "data": [
        {
            "id": 1,
            "name": "Gift Card IDR 1.000.000",
            "type": "Vouchers",
            "exchange_point": 500000,
            "image": "https://picsum.photos/id/646/512/256",
            "createdAt": "2022-05-16T15:23:32.218Z",
            "updatedAt": "2022-05-16T15:23:32.218Z"
        },
        {
            "id": 2,
            "name": "Gift Card IDR 500.000",
            "type": "Vouchers",
            "exchange_point": 250000,
            "image": "https://picsum.photos/id/40/512/256",
            "createdAt": "2022-05-16T15:23:32.218Z",
            "updatedAt": "2022-05-16T15:23:32.218Z"
        },
        {
            "id": 3,
            "name": "Old Fashion Cake",
            "type": "Products",
            "exchange_point": 500000,
            "image": "https://picsum.photos/id/335/512/256",
            "createdAt": "2022-05-16T15:23:32.218Z",
            "updatedAt": "2022-05-16T15:23:32.218Z"
        },
        {
            "id": 4,
            "name": "Gift Card IDR 250.000",
            "type": "Vouchers",
            "exchange_point": 125000,
            "image": "https://picsum.photos/id/751/512/256",
            "createdAt": "2022-05-16T15:23:32.218Z",
            "updatedAt": "2022-05-16T15:23:32.218Z"
        },
        {
            "id": 5,
            "name": "Garuda Miles 1.000",
            "type": "Products",
            "exchange_point": 10000,
            "image": "https://picsum.photos/id/177/512/256",
            "createdAt": "2022-05-16T15:23:32.218Z",
            "updatedAt": "2022-05-16T15:23:32.218Z"
        }
    ],
    "meta": {
        "current_page": 1,
        "last_page": 4,
        "per_page": 5,
        "total": 17
    }
}