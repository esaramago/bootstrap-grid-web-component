import { Component, h, Host } from '@stencil/core'

@Component({
  tag: 'bs-col',
  styleUrl: './col.scss',
  shadow: false
})

export class BSCol {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
