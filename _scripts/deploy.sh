#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'development' ] ; then
    # Initialize a new git repo in web/dist/BookABook, and push it to our server.
    cd web/dist/BookABook 
    git init
        
    git remote add deploy "deploy@staging.bookabook.tk:/var/www/bookabook.tk/.git/"
    git config user.name "Travis CI"
    git config user.email "foliverafreire@gmail.com"
    
    git add .
    git commit -m "Deploy"
    git push --force deploy master

    # Initialize a new git repo in api/, and push it to our server.
    cd api/
    git init

    git remote add deploy "deploy@api.staging.bookabook.tk:/var/www/bookabook.tk/.git/"
    git config user.name "Travis CI"
    git config user.email "foliverafreire@gmail.com"

    git add .
    git commit -m "Deploy"
    git push --force deploy master
else
    echo "Not deploying, since this branch isn't development."
fi
