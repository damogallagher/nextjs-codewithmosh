# nextjs-codewithmosh


## Recommended Plugins for Visual Studio Code

### ES7+ React/Redux/React-Native snippets

Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax. Customizable. Built-in integration with prettier.
Uninstall

https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets


### JavaScript and TypeScript Nightly

Enables typescript@next to power VS Code's built-in JavaScript and TypeScript support

https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next


### Tailwind CSS IntelliSense

Intelligent Tailwind CSS tooling for VS Code

https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

### Prisma

Adds syntax highlighting, formatting, auto-completion, jump-to-definition and linting for .npx prisma files.

https://marketplace.visualstudio.com/items?itemName=Prisma.prisma

# Create next app

npx create-next-app@13.4

## Run dev server
cd  next-first-app

npm run dev

## Run mysql in docker

Ensure docker is running

docker-compose up

## npx prisma setup

### Set up a new npx prisma project

npx prisma init

### Create migrations from your npx prisma schema, apply them to the database, generate artifacts (e.g. npx prisma Client)

npx prisma migrate dev

### Generate artifacts (e.g. npx prisma Client)

npx prisma generate

### Browse your data

npx prisma studio

### Pull the schema from an existing database, updating the npx prisma schema

npx prisma db pull

### Push the npx prisma schema state to the database

npx prisma db push

### Validate your npx prisma schema

npx prisma validate

### Format your npx prisma schema

npx prisma format

### Display npx prisma version info

npx prisma version

### Display npx prisma debug info

npx prisma debug