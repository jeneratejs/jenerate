export default function(configArray, moduleName) {
  const fileNameRegex = /(<%[ ]*name[ ]*%>)/gi;

  configArray.forEach(function(fileType) {
    const compiledName = fileType.fileNameSchema.replace(fileNameRegex, moduleName);
    console.log(`compiled name: ${compiledName}`);
  });
}