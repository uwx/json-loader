# tiny-yaml-loader
Webpack loader for YAML files that directly gives you an object to work with.

## Install

```bash
npm install --save-dev uwx/tiny-yaml-loader
```

## Usage

### Inline

```js
const json = require('tiny-yaml-loader!./file.yml');
```

### Configuration (recommended)

`main.js`
```js
const json = require('./file.yml');
```

`webpack.config.js`
```js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.yml$/,
        loader: 'tiny-yaml-loader'
      }
    ]
  }
}
```

Based on [okonet/yaml-loader](https://github.com/okonet/yaml-loader) and [webpack-contrib/json-loader](https://github.com/webpack-contrib/json-loader), with code from [francois2metz/yaml-loader/add_tests](https://github.com/francois2metz/yaml-loader/tree/add_tests)
