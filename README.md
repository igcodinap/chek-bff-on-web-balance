# BFF-on-Web-Balance Service with NestJS

This is a Backend-for-Frontend (BFF) service that connects with the API Auth and API Wallet services. This BFF service provides an interface for web clients to perform actions like user authentication and retrieving wallet balances. It is built with NestJS.

## Features

- Connects with API Auth for user authentication
- Connects with API Wallet for retrieving wallet balances
- Provides an interface for web clients

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- NPM

### Installation

1. Clone the repo
```bash
git clone https://github.com/igcodinap/chek-bff-on-web-balance.git
```

2. Install NPM packages
```bash
npm install
```

3. Copy the .env file.


4. Update the .env file with your own variables.

### Usage

To run this project in a development mode, use:

```bash
npm run start:dev
```

To build and run this project in a production mode, use:

```bash
npm run build
npm run start:prod
```

## Running the tests

You can run the tests using the following command:

```bash
npm run test
```

For test coverage, use:

```bash
npm run test:cov
```

## Linting

This project uses ESLint and Prettier for linting. You can check for linting issues using:

```bash
npm run lint
```

## Formatting

This project uses Prettier for code formatting. You can format your code using:

```bash
npm run format
```

## Built With

- Node.js
- NestJS
- TypeScript

## Project Structure

```
├── app.module.ts
├── auth
│   ├── auth.controller.spec.ts
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.spec.ts
│   ├── auth.service.ts
│   ├── jwt-auth.guard.test.ts
│   ├── jwt-auth.guard.ts
│   └── jwt.strategy.ts
├── config
│   └── config.module.ts
├── main.ts
└── wallet
    ├── wallet.controller.spec.ts
    ├── wallet.controller.ts
    ├── wallet.module.ts
    ├── wallet.service.spec.ts
    └── wallet.service.ts
```
## Authors

- Ignacio Codina - https://github.com/igcodinap
