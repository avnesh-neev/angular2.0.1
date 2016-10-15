# Angular 2 learning Application with final released version

- Angular 2.0.1
- Gulp
- Jasmine
- Karma
- SASS
- Typescript
- Webpack
- Webpack Development Server


## Features
- Inline external HTML templates into typescript component files (optional)
- Inline and autoprefix external SCSS files into typescript component files (optional)
- Inject styles into `index.html` (optional)
- Inject script tags into `index.html`
- Bundle and minify release builds


## Getting Started
### Prerequisites
- `node >=5.2`

### Installing Global Dependencies
##### Gulp v4 (optional)
```shell
$ npm install gulpjs/gulp-cli -g
```
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp under `./node_modules/.bin` — for example:
```shell
$ ./node_modules/.bin/gulp
```


### Installing Project-local Dependencies
```shell
$ npm install
$ npm run typings
```


## Commands
#### Develop
```shell
$ gulp
```

- Start the Webpack dev server at <a href="http://localhost:3000" target="_blank">localhost:3000</a>
- Watch for changes to your source files
- Live-reload the browser

#### Lint (tslint)
```shell
$ gulp lint
```

#### Test (single-run)
```shell
$ gulp test
```

#### Test (watch mode)
```shell
$ gulp test.watch
```

#### Build
```shell
$ gulp build
```

#### Dist build
```shell
$ gulp dist
```
Executes the following:
- `gulp lint`
- `gulp test`
- `gulp build`
