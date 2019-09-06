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

import { useChuckNorris } from '@jsjoeio/react-use-chuck-norris'

const Example = () => {
  const { data, loading, error} = useChuckNorris()

  if (loading) return <p>Loading...</p>

  if (error) return <p>Oh no! There was an error: {error}</p>

if (data)
  // Data returns a Chuck Norris joke as a string
  // Each joke is random
  return (
    <p>{data}</p>
  )
}
```

## License

MIT © [jsjoeio](https://github.com/jsjoeio)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
