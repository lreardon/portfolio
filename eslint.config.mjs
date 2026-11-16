import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
  globalIgnores(['_old/**', '.next/**', '.vercel/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
