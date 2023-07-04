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
      esmLoaderPath: '../loader',
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
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
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
