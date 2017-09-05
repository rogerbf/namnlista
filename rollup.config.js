import { main as cjs, module as esm, dependencies } from './package.json'
import babel from 'rollup-plugin-babel'

export default Object.assign(
  {
    input: `source/main.js`,
    output: [
      { file: cjs, format: `cjs` },
      { file: esm, format: `es` },
    ],
    plugins: [
      babel({ exclude: `node_modules/**` })
    ],
    external: [
      ...Object.keys(dependencies || [])
    ]
  }
)
