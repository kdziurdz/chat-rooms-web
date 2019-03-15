#!/bin/bash -ex

cp -R app/* build/
pwd
ls
cd build
pwd
ls
npm install
npm run build
cp Staticfile build/

