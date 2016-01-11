# jenerate [![Build Status](https://travis-ci.org/jeneratejs/jenerate.svg)](https://travis-ci.org/jeneratejs/jenerate) [![Dependency Status](https://david-dm.org/jeneratejs/jenerate.svg)](https://david-dm.org/jeneratejs/jenerate)

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
'use strict';

import ReactJen from 'react-jen';

export default {

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
