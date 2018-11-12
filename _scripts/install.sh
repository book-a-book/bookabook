#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)
    
# Import the SSH deployment key
pwd
ls -l
printenv
openssl aes-256-cbc -K $encrypted_key -iv $encrypted_iv -in deploy_rsa.enc -out deploy_rsa -d
rm deploy_rsa.enc # Don't need it anymore
ls -l
chmod 600 deploy_rsa
ls
mv deploy_rsa ~/.ssh/id_rsa
ls -a ~/
ls -l ~/.ssh/
cat ~/.ssh/config
cat ~/.ssh/id_rsa
