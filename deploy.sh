#!/bin/bash

git config user.name "${GITHUB_REPOSITORY}"
git config user.email "aerokube@aerokube.github.com"
git fetch origin
git checkout gh-pages
git rm main.*.css
git rm main.*.js
cp -R dist/* .
git add --all
git commit -am "Publishing to gh-pages"
git push origin HEAD:gh-pages
