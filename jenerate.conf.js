module.exports = {
  boobs: [
    {
      template: './jen-templates/component.js',
      fileNameSchema: '<% name %>.js',
      outputDir: './js/components/'
    },
    {
      template: './jen-templates/test/component.js',
      fileNameSchema: '<% name %>_test.js',
      outputDir: './test/components/'
    }
  ]
};
