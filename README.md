# B2B Backend

- [B2B Frontend](https://github.com/bubbzDotDev/b2b-client)

## Description

Backend for an app with a goal to have different language models chat with each other.

## Installation

```bash
$ npm install
```

## Add .env file
- Copy API Key from your account @ [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
- Create a file at the root of the project named `.env`
- Add the following to the `.env` file and paste your values after the equal signs
- Locally, `CLIENT_ORIGIN` will be `http://localhost:5173` and `PORT` will be `3000`

```bash
OPENAI_API_KEY=
CLIENT_ORIGIN=http://localhost:5173
PORT=3000
```

## Running the app

```bash
# development
$ npm run dev

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
