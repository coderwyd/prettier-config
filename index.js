// @ts-check
import { fileURLToPath } from 'node:url'
import { has } from './utils.js'

const hasTailwind = has('tailwindcss')
const plugins = [
  fileURLToPath(import.meta.resolve('@prettier/plugin-oxc')),
  hasTailwind
    ? fileURLToPath(import.meta.resolve('prettier-plugin-tailwindcss'))
    : '',
].filter(Boolean)

/** @type {import('prettier').Config} */
export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: [
        '**/node_modules/**',
        '**/dist/**',
        '**/coverage/**',
        '**/temp/**',
        '**/.vitepress/cache/**',
        '**/.nuxt/**',
        '**/.vercel/**',
        '**/.changeset/**',
        '**/.idea/**',
        '**/.output/**',
        '**/.vite-inspect/**',

        // root directory
        'output/**',

        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/auto-import?(s).d.ts',
        '**/components.d.ts',
        '**/typed-router.d.ts',
        '**/pnpm-lock.yaml',
      ],
      options: {
        requirePragma: true,
      },
    },
    {
      files: ['**/jsr.json'],
      options: {
        parser: 'json-stringify',
      },
    },
  ],
  plugins,
  ...(hasTailwind && {
    tailwindAttributes: ['class', 'className', 'ngClass', '.*[cC]lassName'],
    tailwindFunctions: ['clsx', 'cn', 'cva'],
  }),
}
