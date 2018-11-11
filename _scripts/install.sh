#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)
    
# Import the SSH deployment key
openssl aes-256-cbc -K $encrypted_a6f7567b205a_key -iv $encrypted_a6f7567b205a_iv -in deploy_rsa.enc -out deploy_rsa -d
rm deploy_rsa.enc # Don't need it anymore
chmod 600 deploy_rsa
ls
mv deploy_rsa ~/.ssh/id_rsa
ls -a ~/
ls -l ~/.ssh/
cat ~/.ssh/config
cat ~/.ssh/id_rsa
