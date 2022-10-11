# Open Food Fact CRUD

### Introduction

This simple API allows to retrieve data from the Open Food Fact database using a barcode.

### Features

- Users can signup and login to their accounts.
- A User can be manually added, deleted or modified.
- Authenticated users can query the Open Food Fact database by provide a barcode.
- Data retrieved from the Open Food Fact database are cached for 5 minutes.

### Installation Guide

- Clone this repository [here](https://github.com/thomas-labrusse/crud-nestjs.git).
- Run npm install to install all dependencies.
- Development and Test environments rely on SQLite databases (.sqlite files), Production runs on PostgreSQL.
- Create an .env file in your project root folder and add the following variable:

```bash
JWT_SECRET=<yoursecretstring>
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```

## Usage

Connect to the API using Postman on port 3000.

### API Endpoints

| HTTP Verbs | Endpoints         | Action                              |
| ---------- | ----------------- | ----------------------------------- |
| POST       | /auth/signup      | To create a user                    |
| POST       | /auth/login       | To login a user                     |
| GET        | /product/:barcode | To retrieve a product details       |
| GET        | /users            | To retrieve all users               |
| GET        | /users/:id        | To retrieve a single user by its id |
| PUT        | /users/:id        | To modify a user                    |
| DELETE     | /users/:id        | To delete a single user             |

## Authentication

### Signup

A user signup and create a new account by using the following endpoint. Return the created user.

```bash
POST /auth/signup
```

#### Parameters (request body)

- email (REQUIRED) : string (valid email)
- password (REQUIRED) : string

### Login

A user logs in by using the following endpoint. Returns a JWT.

```bash
POST /auth/signin
```

#### Parameters (request body)

- email (REQUIRED) : string (valid email)
- password (REQUIRED) : string

#### Response

```bash
{
    "access_token": "randomJWT"
}
```

## Query Open Food Facts

### Query with a barcode

A user query the Open Food Facts database by providing a barcode at the end of the following endpoint :

```bash
GET /product/:barcode
```

This route is protected and only accessible by authenticated users, providing a valid JWT in the Authorization header.

## Production

- On deployment for production, provide the following environment variables :

```bash
NODE_ENV=production
JWT_SECRET=<yoursecretstring>
```

- The setup has been optimized for a deployment on Heroku.
- The repo includes a Procfile allowing easy deployment on Heroku.
- Specific configs have been included in the "ormconfig.ts" file. If you wish to deploy with another provider, modify those edit those configs first.
- A deployed version of this API can be found [here](https://hidden-thicket-27219.herokuapp.com/).

## Credits

### Authors

- [Thomas Labrusse](https://github.com/thomas-labrusse)

### License

This project is available for use under the MIT License.

```

```
