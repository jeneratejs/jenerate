# jenerate [![Build Status](https://travis-ci.org/jeneratejs/jenerate.svg)](https://travis-ci.org/jeneratejs/jenerate)

A framework-agnostic, customizable Javascript module generator.


**To install:**
```bash
npm install --save-dev jenerate
```

**To run:**
```bash
jenerate jen <module type> <arguments>
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
      fileNameSchema: '<<ComponentName>>.js',
      outputDir: '../../js/components/'
    },
    {
      template: ReactJen.componentTest,
      fileNameSchema: '<<ComponentName>>.test.js',
      outputDir: '../../test/'
    }
  ]

};
```