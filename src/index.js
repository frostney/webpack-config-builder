/* eslint import/no-unresolved:0 */

import fs from 'fs';
import path from 'path';
import objectAssign from 'object-assign';

const DEFAULT_FOLDER = './webpack';
const DEFAULT_ARGS = { folder: DEFAULT_FOLDER };

const filesToObject = (folder, options) => {
  const obj = {};

  const files = fs.readdirSync(folder);

  files.forEach(file => {
    /* eslint global-require:0 */
    const basename = path.basename(file);
    const extension = path.extname(file);

    if (extension === '.js' || extension === '.json') {
      const propertyName = basename.split(extension)[0];

      const requirePath = path.resolve(process.cwd(), path.join(folder, file));
      const importedModule = require(requirePath);
      const isES2015Module = importedModule && importedModule.default;
      const moduleValue = (isES2015Module) ? importedModule.default : importedModule;

      let propertyValue = null;

      if (typeof importedModule === 'function') {
        propertyValue = moduleValue(options);
      } else {
        propertyValue = moduleValue;
      }

      if (propertyValue) {
        if (propertyName === 'base') {
          objectAssign(obj, propertyValue);
        } else {
          obj[propertyName] = propertyValue;
        }
      }
    } else {
      const stats = fs.statSync(path.resolve(process.cwd(), path.join(folder, basename)));

      if (stats.isDirectory()) {
        obj[basename] = filesToObject(path.join(folder, basename), options);
      }
    }
  });

  return obj;
};

const webpackConfigBuilder = ({ folder = DEFAULT_FOLDER, options } = DEFAULT_ARGS) =>
  filesToObject(folder, options);

export default webpackConfigBuilder;
