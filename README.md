# Module 05 React testing with vitest and react testing library

In this example we will implement tests in a real project.

This boilerplate is copy of the [origin-front-admin repository](https://github.com/Lemoncode/origin-front-admin).

The exercises are developed in two separate pull requests:

The first one contains testing of functions, components and hooks.
The second one contains vitests tests and E2E testing with Cypress and Playwrigth, and their CI implementation with Github actions.

# Steps

checkout to the desired branch of each pull request

First branch: feature/laboratorio-testing-obligatorio

```bash
git checkout feature/laboratorio-testing-obligatorio
```

Second branch: feature/laboratorio-testing-opcional

```bash
git checkout feature/laboratorio-testing-opcional
```


`npm install` to install all packages:

```bash
npm install
```

`npm test` to run all vitest tests:

```bash
npm test
```

`npm run test:e2e` to start Cypress env:

```bash
npm run test:e2e
```

`npm run test:playwright` to start Playwright env:

```bash
npm run test:playwright
```
