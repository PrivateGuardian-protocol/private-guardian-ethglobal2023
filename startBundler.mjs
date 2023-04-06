#!/usr/bin/env zx

import {existsSync} from 'fs';
import {resolve} from 'path';

const root = resolve(__dirname)

// Start node and bundler locally
const startBundler = async () => {
  cd(root)
  cd('bundler')
  if (!existsSync(resolve('./node_modules'))) {
    await $`pnpm i`
  }
  if (!existsSync(resolve('./packages/sdk', 'dist'))) {
    await $`pnpm preprocess`
  }
  cd('./packages/bundler')
  $`pnpm hardhat-node-with-deploy`
  await $`sleep 3;`,
  $`pnpm bundler --unsafe`
}

const deployContracts = async () => {
  cd(root)
  cd('private-guardian-contracts')

  if (!existsSync(resolve('./node_modules'))) {
    await $`pnpm i`
  }
  // if no wasm keys file
  if (!existsSync(resolve('./statics/UpdateGuardian.wasm'))) {
    await $`./compile-circuit.sh`
  }
  // Deploy contracts
  await $`pnpm hardhat deploy --network localhost`
}

startBundler().then(() => $`sleep 5`).then(deployContracts)

// For runing single test
// deployContracts()
