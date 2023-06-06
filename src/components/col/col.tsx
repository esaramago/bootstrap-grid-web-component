import { Component, Prop, h, Host } from '@stencil/core'

@Component({
  tag: 'bs-col',
  styleUrl: './col.scss',
  shadow: false
})

export class BSCol {
  @Prop() name: string

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
