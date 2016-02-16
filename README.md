# jenerate [![Build Status](https://travis-ci.org/jeneratejs/jenerate.svg)](https://travis-ci.org/jeneratejs/jenerate) [![Dependency Status](https://david-dm.org/jeneratejs/jenerate.svg)](https://david-dm.org/jeneratejs/jenerate)
[![devDependency Status](https://david-dm.org/jeneratejs/jenerate/dev-status.svg)](https://david-dm.org/jeneratejs/jenerate#info=devDependencies)

A framework-agnostic, customizable Javascript module generator.


**To install:**
```bash
npm install --save-dev jenerate
```

**To run:**
```bash
jenerate <command> <arguments>
```

##### Arguments

```bash

```

## Configuration

**jenerate.conf.js:**
```js
var ReactJen = require('react-jen');

module.exports = {

  component: [
    {
      template: ReactJen.component,
      fileNameSchema: '<% ComponentName %>.js',
      outputDir: './js/components/'
    },
    {
      template: ReactJen.componentTest,
      fileNameSchema: '<% ComponentName %>.test.js',
      outputDir: './test/components/'
    }
  ]

};
```

**Note:** When specifying `outputDir`, this directory must already exist to prevent access errors. It can still be an empty directory.
