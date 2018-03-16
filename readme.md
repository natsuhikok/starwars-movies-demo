# Forntend Boilerplate
Front-end Boilerplate without gulp or grant.

## setup

```
# clone
$ git clone git@github.com:natsuhikok/frontend-boilerplate.git hogehoge

# change remote
$ git remote set-url origin git@github.com:yourname/hogehoge.git

# install
$ npm install

# add original remote repo as upstrem [optional]
$ git remote add upstream git@github.com:natsuhikok/frontend-boilerplate.git
```

## Stack
* js linter: eslint with airbnb javascript style guide
* dev server: browser-sync
* javascript: es2015 with webpack
* css: node-sass with scss style
* normalize: normalize.css
* images: imagemin
* html template: ejs

## npm scripts

```bash
## run server and watch files
$ npm start
## build sorce files
$ npm run build
```

## browsersync
public
```
"browsersync": "browser-sync start --server 'public' --files 'public/' --port 8080",
```

proxy
```
"browsersync": "browser-sync start --proxy localhost --files 'public/' --port 8080",
```
