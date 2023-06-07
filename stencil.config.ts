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
    {
      type: 'dist-custom-elements',
      copy: [
        {
          src: 'assests/**/*',
          dest: 'www/assets',
          warn: true,
        },
        {
          src: '../node_modules/firebase/firebase-app-compat.js',
          dest: 'www/build/firebase',
          warn: true,
        }
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
  globalStyle: 'src/css/main.scss',
  plugins: [
    sass()
  ],
}
