import prettierPluginTailwindcss from 'prettier-plugin-tailwindcss'

export default {
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  endOfLine: 'lf',
  plugins: [prettierPluginTailwindcss()]
}
