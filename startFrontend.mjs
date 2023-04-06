#!/usr/bin/env zx

import {existsSync} from 'fs';
import {resolve} from 'path';

const root = resolve(__dirname)

const startFrontEnd = async () => {
  cd(root)
  cd('account.js-next')

  const branch = await $`git branch --show-current`
  if (branch !== 'connect-example') {
    await $`git checkout connect-example`
  }

  if (!existsSync(resolve('./node_modules'))) {
    await $`pnpm i`
  }

  $`pnpm dev`
  await $`sleep 5`,
  await $`open -a '/Applications/Google\ Chrome.app' http://localhost:5555`
}

await startFrontEnd()

// For runing single test
// deployContracts()
