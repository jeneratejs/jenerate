import async               from 'async';
import parseFile           from '../utils/parse_file';
import createPropertyRegex from '../utils/create_property_regex';
import writeFile           from '../utils/write_file';

export default function(configArray, moduleName, namedArgs) {
  const moduleNameRegex = createPropertyRegex('name');

  async.forEach(configArray, (customModule, cb) => {
    const outputFileName = customModule.fileNameSchema.replace(moduleNameRegex, moduleName);

    parseFile(customModule.template).then((fileString) => {
      fileString = fileString.replace(moduleNameRegex, moduleName);

      Object.keys(namedArgs).forEach((property) => {
        fileString = fileString.replace(createPropertyRegex(property), namedArgs[property]);
      });

      writeFile(customModule.outputDir, outputFileName, fileString).then(cb).catch((err) => {
        throw err;
      });
    }).catch((err) => {
      throw err;
    });
  });
}
