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
          src: 'images/**/*',
          dest: 'www/build/images',
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
