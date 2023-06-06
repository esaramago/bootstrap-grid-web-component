import { Component, Prop, h, Host } from '@stencil/core'

@Component({
  tag: 'bs-row',
  styleUrl: './row.scss',
  shadow: false
})

export class BSRow {
  @Prop() name: string

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
