# node-cli-starter

## What is it?

A starter project for your next javascript-based CLI tool/application.

## Why?

Didn't really like the other starters, so I decided to create my own with the stack I like.

## Features

- [TypeScript](https://github.com/Microsoft/TypeScript) for fancy type checking and [Babel](https://github.com/babel/babel) for compiling ES6 code, all bundled with [Webpack](https://github.com/webpack/webpack)
- Linting and formatting with [ESLint](https://github.com/eslint/eslint) and formatting with [Prettier](https://github.com/prettier/prettier)
- Building a single executable using [Pkg](https://github.com/vercel/pkg)
- Testing with [Jest](https://github.com/facebook/jest)

By default, the project contains a simple example written with [Commander](https://github.com/tj/commander.js/), but you can use whatever you like!

## Set up

```
git clone --depth 1 --single-branch https://github.com/jakubbilko/node-cli-starter.git your-directory-name
cd your-directory-name
yarn install
```

## Available commands

- `build:dev` - builds the sources into a single file (`app.js`) into the `build` directory
- `build:prod` - builds the sources and creates an executable file in the `dist` directory
- `build:exe` - creates the executable from the compiled sources
- `check-types` - runs the typescipt compiler to check for errors
- `test` - run tests

## TODO

- [ ] Allow the developer to specify the build targets for the executable
- [ ] CLI tool for scaffolding?