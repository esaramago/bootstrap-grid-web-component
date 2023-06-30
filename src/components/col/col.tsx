import { Component, h, Host } from '@stencil/core'

@Component({
  tag: 'bwc-col',
  styleUrl: './col.scss',
  shadow: false
})

export class BWCCol {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
