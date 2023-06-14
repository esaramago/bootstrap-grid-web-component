import { Component, Element, Prop, h } from '@stencil/core'

@Component({
  tag: 'bswc-section',
  styleUrl: './section.css',
  shadow: true
})

export class BSWCSection {
  @Element() element: HTMLElement
  @Prop() heading: string
  @Prop() slug: string
  @Prop() hasExample: boolean = true
  @Prop() language: string = ''

  getCode(content: any) {
    return content
  }

  render() {

    const code = this.getCode(this.element.innerHTML)

    return (
      <section class="section">

        <h4 class="section__title">{this.heading}</h4>

        <div>

          {this.hasExample ?
            <div class="section__example">
              <div class="section__example-title">Example</div>
              <div class="section__example-content">
                <slot></slot>
              </div>
            </div>
          : ''}

          <bswc-code innerHTML={code} has-example={this.hasExample} language={this.language}></bswc-code>
        </div>

        {this.slug ?
          <p class="section__info">More info about <a href={`https://getbootstrap.com/docs/5.3/layout/grid/#${this.slug}`} target="_blank">{this.heading}</a> at Bootstrap website.</p>
        : ''}
      </section>
    )
  }
}
