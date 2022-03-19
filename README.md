# @sandypockets/components

A React component library, still very much under development. As the library works towards a 1.0.0 release, there will likely be large stylistic and functional overhauls. Until then, this package is not suitable for production.

[![License: MIT](https://img.shields.io/npm/l/@sandypockets/components?color=1eb319)](LICENSE.md)
[![](https://img.shields.io/npm/v/@sandypockets/components?color=%231eb319)](https://www.npmjs.com/package/@sandypockets/components)
[![](https://img.shields.io/npm/dw/@sandypockets/components?label=npm%20downloads&color=%231eb319)](https://www.npmjs.com/package/@sandypockets/components)
[![](https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/sandypockets)

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
      <Button theme="primary">
        Click me
      </Button>
    </div>
  )
}
```

<details>
<summary>View button props</summary>

| Attribute  | Prop Name          | Type     | Required | default   |
|------------|--------------------|----------|----------|-----------|
| aria-label | accessibilityLabel | string   | no       | null      |
| className  | theme              | string   | no       | "primary" |
| disabled   | disabled           | boolean  | no       | false     |
| style      | inlineStyle        | object   | no       | null      |
| type       | type               | string   | no       | "button"  |
| onClick    | onClickHandler     | function | no       | null      |
| onSubmit   | onSubmitHandler    | function | no       | null      |

</details>



## Current components
- Avatar
- Avatar group
- Badge
- Button

## Live demo
Check out the [demo on StackBlitz](https://stackblitz.com/edit/react-uyja8n?file=src/App.js)
