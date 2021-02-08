![](https://user-images.githubusercontent.com/3766024/105522456-2bf1fa00-5cd5-11eb-85a1-33472541ba55.png)

## Fastics Native

A boilerplate for Expo (React-Native) with batteries included (TypeScript, Styled-Components, Eslint, Prettier, Jest). This project uses Expo CLI so it is necessary to install it on your machine before proceeding with the steps below, follow the instructions on the official  [Expo CLI](https://docs.expo.io/get-started/installation/) website

### Stack

- TypeScript
- Expo
- Prettier
- Eslint + Airbnb Rules
- Styled-Components
- React Navigation
- i18n-js

### Install

#### with npm

```shell
npm install
```

#### with Yarn

```shell
yarn install
```

### Starting the development server

```shell
expo start
```

When you run \`expo start\` (or \`npm start\`), Expo CLI starts Metro Bundler, which is an HTTP server that compiles the JavaScript code of our app using [Babel](https://babeljs.io/) and serves it to the Expo app. It also pops up Expo Dev Tools, a graphical interface for Expo CLI.

### Making your first change

Open up **src/index.tsx** and change the text to "Fastics Native". You should see it update on your device. This is great progress, you now have the Expo toolchain running on our machine and we are able to edit the source code for a project and see the changes live on our device!
