# Mono repo for project private guardian

This is a repo that curate projects used in eth global hackathon

## How to start

You would need three terminals to start this project.

Start by running a submodule clone command

`git submodule update --init --recursive`

### Start it with zx script

Make sure you have installed `zx` package globally by running `npm i -g zx`

Run zx script to start bundler and frontend in a seperate terminal

Start Node and Bundler

`zx ./startBundler.mjs`

Start Frontend, this should open up a browser with the frontend.

`zx ./startFrontend.mjs`

And then you should able to twist your own config by update it using the address outputed by `startBundler` script.

## Start it all manually

Try running this project all by your hands, follow this step.

### Start bundler and node in a terminal

Make sure your are in the `bundler` folder

Install packages with package manager and build package

`pnpm i && pnpm run preprocess`

Change directory to the packages/bundler

`cd packages/bundler`

Run hardhat with deployment

`pnpm hardhat-node-with-deploy`

Open another terminal, and run bundler

`pnpm bundler --unsafe`

### Compile private guardian circuits and deploy contracts in second terminal

Make sure your are in the `private-guardian-contracts` folder

Install packages with package manager

`pnpm i`

Compile circuits using the compile shell script

`./compile-circuit.sh`

Run deploy to deploy contracts

`pnpm hardhat deploy --network localhost`

### Start frontend

Make sure your are in the `account.js-next` folder, and is in the `connect-example` branch.

If you don't, run `git checkout connect-example`

Install packages with package manager

`pnpm i`

Update `examples/with-private-recovery/config.ts` with the deployed contract address

Start a development application

`pnpm build && pnpm dev`
