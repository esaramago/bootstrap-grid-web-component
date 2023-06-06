import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
  namespace: 'bootstrap-grid-webcomponents',
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
