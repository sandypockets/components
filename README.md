# @sandypockets/components

A React component library, still very much under development. As the library works towards a 1.0.0 release, there will likely be large stylistic and functional overhauls. Until then, this package is not suitable for production.

Each component is styled with its own CSS module, so you don't have to worry about collisions with your existing code. 

## Installation
Add the package to your project:

```shell
yarn add @sandypockets/components
```

## Usage
Once installed, import the package and use it like you would any other component.

```javascript
import { Button } from '@sandypockets/components'

export default function MyComponent() {
  return (
    <div>
      <Button type="primary">
        Click me
      </Button>
    </div>
  )
}
```

## Current components
- Button

## Live demo
Check out the [demo on StackBlitz](https://stackblitz.com/edit/react-uyja8n?file=src/App.js)
