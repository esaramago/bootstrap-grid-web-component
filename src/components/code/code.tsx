import { Component, Element, Prop, h } from '@stencil/core'

@Component({
  tag: 'bswc-code',
  styleUrl: './code.css',
  shadow: true
})

export class BSWCCode {
  @Element() element: HTMLElement;
  @Prop() language: string = 'HTML'
  @Prop() hasExample: boolean

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
      <div class={'code ' + (this.hasExample ? 'code--example' : '')}>
        <h5 class="code__title">{this.language}</h5>
        {code.map(tag => {
          return <pre><code>{tag.includes('bs-row') ? tag : '  ' + tag}</code>
          </pre>
        })}
      </div>
    )
  }
}
