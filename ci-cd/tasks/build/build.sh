#!/bin/bash -ex

cp -R app/* build/
cd build
npm install
npm run build
cp Staticfile build/

