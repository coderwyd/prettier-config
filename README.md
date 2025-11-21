# @coderwyd/prettier-config

[![release status](https://github.com/coderwyd/prettier-config/actions/workflows/release.yml/badge.svg)](https://github.com/coderwyd/prettier-config/actions/workflows/release.yml)
[![npm](https://img.shields.io/npm/v/@coderwyd/prettier-config.svg)](https://npmjs.org/package/@coderwyd/prettier-config)

## Feature

⚡ Auto plugin detection – Automatically enables Tailwind plugin when tailwindcss is installed.

- 🚀 Fast parsing – Powered by `@prettier/plugin-oxc` for improved performance.
- 🎨 Consistent style – Enforces single quotes, no semicolons, and trailing commas.
- 🔒 Smart ignore rules – Avoids formatting build outputs, snapshots, lock files, and other noisy paths.
- 🧰 Framework-friendly – Works seamlessly with Vue, React, Svelte, and modern toolchains.
- 🌬️ Tailwind enhancement – Auto-sorts classes and supports utilities like clsx, cn, and cva.
- 📦 Full ESM support – Uses import.meta.resolve and works with Node, Bun, and Deno.
- 📘 Special JSON handling – Applies json-stringify parser for stable jsr.json formatting.
- 🏆 Drop-in config – Clean defaults; typically only needs a single line to enable.

## Usage

### Install

```bash
pnpm i -D prettier @coderwyd/prettier-config
```

### Create config file

```js
// prettier.config.js
import defaultConfig from '@coderwyd/prettier-config'

export default defaultConfig
```

## License

[MIT](./LICENSE) License &copy; 2025-PRESENT [Donny Wang](https://github.com/coderwyd)
