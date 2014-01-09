# Welcome to the EVB CodeIgniter-based boilerplate

## Requirements

* Compass (requires Ruby) ```gem install compass```

* [npm](http://nodejs.org/)

* [Composer](http://getcomposer.org)

## Installation

```
$ cd /path/to/project
$ php composer.phar install
$ npm install
$ node_modules/.bin/grunt
```

## Usage

* "Watch" your CSS and JS and auto-compile ```node_modules/.bin/grunt```

* Beautify your JS ```node_modules/.bin/grunt beautify```

* Manually compile your CSS ```node_modules/.bin/grunt styles```

* Manually compile your JS ```node_modules/.bin/grunt scripts```

## Heroku Deployment

This uses a [custom build pack](https://github.com/CHH/heroku-buildpack-php)

```
$ cd /path/to/project
$ heroku config:set BUILDPACK_URL=https://github.com/CHH/heroku-buildpack-php
$ git push heroku master
```

## License

[MIT](LICENSE)
