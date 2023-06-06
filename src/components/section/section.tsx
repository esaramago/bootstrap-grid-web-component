import { Component, Element, Prop, h } from '@stencil/core'

@Component({
  tag: 'bswc-section',
  styleUrl: './section.css',
  shadow: true
})

export class BSWCSection {
  @Element() element: HTMLElement;

  @Prop() heading: string
  @Prop() slug: string

  formatHtml(content: any) {
    let string = content.replaceAll('<!---->', '')
    string = string.replaceAll(' class="hydrated"', '')
    let array = string.split('> <')
    array = array.map((element, index) => {
      const isFirst = index === 0
      const isLast = index === array.length - 1
      let html = ''
      if (!isFirst) {
        html += '<'
      }
      html += element
      if (!isLast) {
        html += '>'
      }
      return html
    })

    return array

  }

  render() {

    const code = this.formatHtml(this.element.innerHTML)

    return (
      <section class="section">


        <h4 class="section__title">{this.heading}</h4>

        <div>

          <div class="section__example">
            <div class="section__example-title">Example</div>
            <slot></slot>
          </div>

          <pre class="section__code">
            <h5 class="section__code-title">HTML</h5>
            {code.map(tag => {
              return <div>
                <code>{tag.includes('bs-row') ? tag : '  ' + tag}</code>
              </div>
            })}
          </pre>
        </div>

        <a href={`https://getbootstrap.com/docs/5.3/layout/grid/#${this.slug}`} target="_blank" class="section__link">More info about {this.heading} at Bootstrap website</a>
      </section>
    )
  }
}
