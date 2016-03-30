# Build Angular 2 app with Babel

An [Angular 2](https://angular.io/) starter project
built with [ECMAScript 2015 aka ES6](https://babeljs.io/docs/learn-es2015/) via
[Babel](https://babeljs.io/) and [Browserify](http://browserify.org/).
It has the npm modules, configuration, scripts, folders and routing in place to
make getting started with an Angular 2 project easy!

Here's what is in the project:

* Angular 2 scripts and ES6 (Babel) instead of [TypeScript](http://www.typescriptlang.org/)/[Traceur](https://github.com/google/traceur-compiler).
* Angular 2 bootstrapper wired up to the app component
* App component with basic routing applied
* Homepage component
* A single "feature" component (represents a custom feature your app would have)
* A simple data service to provide data and show dependency injection
* Routing between the homepage and the "feature"
* Bootstrap for CSS and basic asset setup
* live-server used to launch the site and reload it as you make changes

Notes:
* Supports class/parameter decorators and parameter type annotations with [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) and [babel-plugin-angular2-annotations](https://github.com/shuhei/babel-plugin-angular2-annotations)
* **Parameter decorator is not supported because the syntax is not supported by Babel's parser.**
* Bundles JavaScript files into one file with Browserify. (However, it doesn't use any Browserify-specific technology. You can easily switch to Webpack and etc.)

## Running the Application

* Install [Node.js](http://nodejs.org)

* Run `npm install` to install app dependencies

* Run `npm start` to start the server and launch the app

### Preview

* Serve static files from `public` directory `cd public && python -m SimpleHTTPServer 8000`

## Testing

* Run all tests `npm test`
* Run only unit tests `npm run unit`
* Run only end-to-end tests `npm run e2e`

## License

angular2-babel-starter is released under the [MIT License](https://opensource.org/licenses/MIT).
Developed by [rastasheep](https://github.com/rastasheep).
