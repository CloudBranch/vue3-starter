const uikitPackage = require('./package.json')

module.exports = {
  assumptions: {
    noDocumentAll: true
  },
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@vue/babel-plugin-jsx', { optimize: true, enableObjectSlots: false }],
    [
      'transform-define',
      {
        __UIKIT_VERSION__: uikitPackage.version,
        __REQUIRED_VUE__: uikitPackage.peerDependencies.vue
      }
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@': './src'
        }
      }
    ]
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { node: true },
            modules: 'commonjs'
          }
        ]
      ]
    },
    lib: {
      plugins: [
        ['babel-plugin-add-import-extension', { extension: 'mjs' }],
        [
          './build/babel-plugin-replace-import-extension',
          {
            extMapping: {
              '.sass': '.css',
              '.scss': '.css'
            }
          }
        ]
      ]
    }
  }
}
