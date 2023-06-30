import { Component, h, Host } from '@stencil/core'

@Component({
  tag: 'bwc-row',
  styleUrl: './row.scss',
  shadow: false
})

export class BWCRow {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
