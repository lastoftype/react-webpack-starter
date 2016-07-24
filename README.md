# My React + Webpack Boilerplate

An extremely simple Webpack/React/Express project shell. I've combined many aspects of other boilerplates into one that I like and find to be pretty easy to use.

## Install

```
npm install
```

On `postinstall` this will run `npm run build`.

## Dev with React hot-loading

```
npm run dev
```

Will run on `localhost:3000`

## Build (on Production)

```
npm run build
```

## Serve (on Production)

```
npm run start
```

## Ready for Heroku

This will run on a Heroku app, just run `heroku create` and then `git push heroku master` to deploy. The app will run `npm run build` and `node server.js` on the server, which bundles the app and starts our Express server, without React hotloading. 