# Mono repo for project private guardian

This is a repo that curate projects used in eth global hackathon

## How to start

You would need three terminals to start this project

### Start bundler and node

Make sure your are in the `bundler` folder

Install packages with package manager and build package

`pnpm i && pnpm run preprocess`

Change directory to the packages/bundler

`cd packages/bundler`

Run hardhat with deployment

`pnpm hardhat-node-with-deploy`

Open another terminal, and run bundler

`pnpm bundler --unsafe`

### Compile private guardian circuits and deploy contracts

Make sure your are in the `private-guardian-contracts` folder

Install packages with package manager

`pnpm i`

Compile circuits using the compile shell script

`./compile-circuit.sh`

Run deploy to deploy contracts

`pnpm hardhat deploy --network localhost`

### Start frontend

Make sure your are in the `account.js-next` folder

Install packages with package manager

`pnpm i`

Update `examples/with-private-recovery/config.ts` with the deployed contract address

Start a development application

`pnpm dev`