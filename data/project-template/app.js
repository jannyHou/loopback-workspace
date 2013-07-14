/*!
 * App Dependencies.
 */

var fs = require('fs');
var path = require('path');

/**
 * Synchronously loads all modules within the project.
 *
 * @returns {Object} An Object mapping module names to modules instances.
 */
function loadModules() {
  var modules = {};
  var moduleDir = path.resolve(__dirname, 'modules');

  fs
    .readdirSync(moduleDir)
    .forEach(function (fragment) {
      var fullpath = path.join(moduleDir, fragment);
      var name = fragment.slice(0, fragment.length - path.extname(fragment).length);

      modules[name] = require(fullpath);
    });

  return modules;
}

console.log('Loading {{name}}...');
loadModules();