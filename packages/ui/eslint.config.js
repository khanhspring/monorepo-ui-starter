import {defineConfig} from 'eslint/config'
import {config as reactConfig} from "@repo/eslint-config/eslint.react";

export default defineConfig([
  ...reactConfig,
])
