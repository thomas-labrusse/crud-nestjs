# Open Food Fact CRUD

### Introduction

This simple API allows to retrieve food .

### Features

- Users can signup and login to their accounts
- A User can be manually added, deleted or modified
- Authenticated users can query the Open Food Fact database by provide a barcode.

### Installation Guide

- Clone this repository [here](https://github.com/thomas-labrusse/crud-nestjs.git).
- Run npm install to install all dependencies
- Development and Test environments rely on SQLite databases (.sqlite files), Production runs on PostgreSQL
- Create an .env file in your project root folder and add the following variable:

```bash
JWT_SECRET=<yoursecretstring>
```

### Usage

- Connect to the API using Postman on port 3000.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### API Endpoints

| HTTP Verbs | Endpoints            | Action                                 |
| ---------- | -------------------- | -------------------------------------- |
| POST       | /api/user/signup     | To sign up a new user account          |
| POST       | /api/user/login      | To login an existing user account      |
| POST       | /api/causes          | To create a new cause                  |
| GET        | /api/causes          | To retrieve all causes on the platform |
| GET        | /api/causes/:causeId | To retrieve details of a single cause  |
| PATCH      | /api/causes/:causeId | To edit the details of a single cause  |
| DELETE     | /api/causes/:causeId | To delete a single cause               |

### Authentication

### Authors

- [Thomas Labrusse](https://github.com/thomas-labrusse)

### License

This project is available for use under the MIT License.
