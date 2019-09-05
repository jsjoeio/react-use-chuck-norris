# @jsjoeio/react-use-chuck-norris

> A custom React Hook which gives you a Chuck Norris joke

[![NPM](https://img.shields.io/npm/v/@jsjoeio/react-use-chuck-norris.svg)](https://www.npmjs.com/package/@jsjoeio/react-use-chuck-norris) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @jsjoeio/react-use-chuck-norris
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from '@jsjoeio/react-use-chuck-norris'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [jsjoeio](https://github.com/jsjoeio)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
