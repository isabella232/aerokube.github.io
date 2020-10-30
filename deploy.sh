#!/bin/bash

WD=$(pwd)
CLONE_DIR="${GITHUB_WORKSPACE}/website"
git clone https://${GITHUB_TOKEN}@github.com/aerokube/aerokube.github.io.git ${CLONE_DIR}
cd ${CLONE_DIR}
git config user.name "${GITHUB_REPOSITORY}"
git config user.email "aerokube@aerokube.github.com"
git checkout master
cp -R ${WD}/dist/* ${CLONE_DIR}
git add --all
git commit -am "Publishing to gh-pages"
git push origin HEAD:master
