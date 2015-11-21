module.exports = {
  boobs: [
    {
      template: '../../jen-templates/component.js',
      fileNameSchema: '<% name %>.js',
      outputDir: '../../js/components/'
    },
    {
      template: '../../jen-templates/tests/component.js',
      fileNameSchema: '<% name %>_test.js',
      outputDir: '../../test/components/'
    }
  ]
};
