#!/bin/bash

git config user.name "Travis CI"
git config user.email "jbydeley@gmail.com"

git init
git add .
git commit -m "Deploy to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
