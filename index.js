const yaml = require('js-yaml');

module.exports = function(source) { // don't make this an arrow function
  if (this.cacheable) this.cacheable();
  if (!source) return 'module.exports = {}';

  const yamlLoaded = yaml.safeLoad(source);
  if (!yamlLoaded) return 'module.exports = {}';

  const value = JSON.stringify(yamlLoaded)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `module.exports = ${value}`;
}
