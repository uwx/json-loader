const yaml = require('js-yaml');

module.exports = source => {
  if (this.cacheable) this.cacheable();

  const value = JSON.stringify(yaml.safeLoad(source));

  value = value
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `module.exports = ${value}`;
}
