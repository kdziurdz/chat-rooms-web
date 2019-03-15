#!/bin/bash
pwd
ls
cd app
pwd
ls
npm install
npm run build
cp Staticfile build/
cp manifest.yml build/