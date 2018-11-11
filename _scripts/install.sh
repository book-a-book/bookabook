#!/bin/bash
set -x # Show the output of the following commands (useful for debugging)
    
# Import the SSH deployment key
openssl aes-256-cbc -K $encrypted_22009518e18d_key -iv $encrypted_22009518e18d_iv -in deploy_rsa.enc -out deploy_rsa -d
rm deploy_rsa.enc # Don't need it anymore
chmod 600 deploy_rsa
mv deploy_rsa ~/.ssh/id_rsa
