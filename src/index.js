import fs from 'fs';
import path from 'path';
import objectAssign from 'object-assign';

const DEFAULT_FOLDER = './webpack';
const DEFAULT_ARGS = { folder: DEFAULT_FOLDER };

const webpackConfigBuilder = ({ folder = DEFAULT_FOLDER, options } = DEFAULT_ARGS) => {
  const webpackConfig = {};

  const files = fs.readdirSync(folder);

  files.forEach(file => {
    const basename = path.basename(file);
    const extension = path.extname(file);

    const propertyName = basename.split(extension)[0];

    const importedModule = require(path.resolve(process.cwd(), path.join(folder, file)));

    let propertyValue = null;

    if (typeof importedModule === 'function') {
      propertyValue = importedModule(options);
    } else {
      propertyValue = importedModule;
    }

    if (propertyValue) {
      if (propertyName === 'base') {
        objectAssign(webpackConfig, propertyValue);
      } else {
        webpackConfig[propertyName] = propertyValue;
      }
    }
  });

  return webpackConfig;
};

export default webpackConfigBuilder;
