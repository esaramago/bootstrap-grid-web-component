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
          src: 'images',
        },
        {
          src: 'site.webmanifest',
        },
        {
          src: 'css',
        },
      ]
    },
  ],
  globalStyle: 'src/cssGlobals/global.scss',
  plugins: [
    sass({
      includePaths: [
        'src/cssGlobals/global.scss',
      ]
    })
  ],
}
