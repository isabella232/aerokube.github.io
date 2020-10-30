#!/bin/bash

git config user.name "${GITHUB_REPOSITORY}"
git config user.email "aerokube@aerokube.github.com"
git checkout master
cp -R dist/* .
git add --all
git commit -am "Publishing to master"
git push origin HEAD:master
