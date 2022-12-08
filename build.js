const { externalGlobalPlugin } = require("esbuild-plugin-external-global");
const esbuild = require('esbuild')

function logRequest(...args) { console.log(...args) }

esbuild.serve({
  port: 8001,
  servedir: 'www',
  onRequest: logRequest,
}, {
  entryPoints: ['index.tsx'],
  outdir: 'www/js',
  format: 'cjs',
  bundle: true,
})

esbuild.serve({
  port: 8002,
  servedir: 'www',
  onRequest: logRequest,
}, {
  entryPoints: ['import-mod.jsx'],
  outdir: 'www/js',
  format: 'esm',
  bundle: true,
  plugins: [
    externalGlobalPlugin({
      'react': 'window.React',
      'react-dom': 'window.ReactDOM',
    })
  ]
})
