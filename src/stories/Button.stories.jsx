import React from 'react'
import Button from '../lib/components/Button/Button'

export default {
  title: "Button"
}

export const Primary = () => {
  return (
    <div>
      <Button type="primary">
        Click me
      </Button>
    </div>
  )
}

export const OverridingStyles = () => {
  return (
    <div>
      <Button inlineStyle={{ width: 500 }}>
        Click me
      </Button>
    </div>
  )
}