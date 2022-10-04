#!/bin/bash

yarn install
yarn run build
npx typeorm migration:run
yarn run start:dev