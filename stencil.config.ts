import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import nodePolyfills from 'rollup-plugin-node-polyfills'

export const config: Config = {
  namespace: 'bootstrap-grid-webcomponents',
  rollupPlugins: {
    after: [
      nodePolyfills(),
    ]
  },
  outputTargets: [
    {
      type: 'dist',
    },

    // Website
    {
      type: 'www',
      copy: [
        {
          src: 'images', warn: true
        },
        {
          src: 'site.webmanifest', warn: true
        },
        {
          src: 'css', warn: true
        },
      ]
    },
  ],
  globalStyle: 'src/global.css',
  plugins: [
    sass()
  ],
}
