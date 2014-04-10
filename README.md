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

## Environment Configuration

* The environment detection is done in ```src/index.php``` starting at [line 165](https://github.com/EvolutionBureau/ci-boilerplate/blob/master/src/index.php#L165)

* Config files can be found in the corresponding environment directories: ```src/config/production/env_config.php```

* Note that the default environment is production.  If you want to set up other environments you'll need to edit the regexs in [src/index.php](https://github.com/EvolutionBureau/ci-boilerplate/blob/master/src/index.php#L165)

## Heroku Deployment

This uses a [custom build pack](https://github.com/CHH/heroku-buildpack-php)

```
$ cd /path/to/project
$ heroku config:set BUILDPACK_URL=https://github.com/CHH/heroku-buildpack-php
$ git push heroku master
```

## License

[MIT](LICENSE)
