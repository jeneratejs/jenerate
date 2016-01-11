module.exports = {
  boobs: [
    {
      template: './jen-templates/component.txt',
      fileNameSchema: '<% name %>.js',
      outputDir: './js/components/'
    },
    {
      template: './jen-templates/test/component.txt',
      fileNameSchema: '<% name %>_test.js',
      outputDir: './test/components/'
    }
  ]
};
