#!/bin/sh
# https://github.com/arielivandiaz/auto-commit

node scripts/version/updateVersion.js $1
version=$(cat package.json | jq '.version')
message="v"${version}
echo ${message}
git status 
git add -A
git commit -m ${message}
git push  origin master

