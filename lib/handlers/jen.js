import async               from 'async';
import parseFileToString   from '../utils/parse_file';
import createTemplateRegex from '../utils/create_template_regex';
import writeFile           from '../utils/write_file';

export default function(configArray, moduleName, namedArgs) {
  const moduleNameRegex = createTemplateRegex('name');

  async.forEach(configArray, (customModule, cb) => {
    const outputFileName = customModule.fileNameSchema.replace(moduleNameRegex, moduleName);

    parseFileToString(customModule.template).then((fileString) => {
      fileString = fileString.replace(moduleNameRegex, moduleName);

      Object.keys(namedArgs).forEach((property) => {
        fileString = fileString.replace(createTemplateRegex(property), namedArgs[property]);
      });

      writeFile(customModule.outputDir, outputFileName, fileString).then(cb).catch((err) => {
        throw err;
      });
    }).catch((err) => {
      throw err;
    });
  });
}
