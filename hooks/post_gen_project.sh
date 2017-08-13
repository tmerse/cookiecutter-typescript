#!/bin/bash

npm install

git init
git add .
git commit -a -m "init"

# ignore error for particular command
tsc || true

# if hash common-readme 2>/dev/null; then
#   common-readme > README.md
# else
#   true
#   # do sth. with README
# fi
