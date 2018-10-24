# -*- mode: ruby -*-
# vi: set ft=ruby :

required_plugins = %w( vagrant-cachier )
required_plugins.each do |plugin|
    system "vagrant plugin install #{plugin}" unless Vagrant.has_plugin? plugin
end

Vagrant.configure("2") do |config|

    if Vagrant.has_plugin?("vagrant-cachier")
        config.cache.scope = :box
    end

    config.vm.box = "ubuntu/xenial64"
    config.vm.provision "shell", inline: <<-SHELL
        wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
        echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | sudo tee /etc/apt/sources.list.d/google-chrome.list

        sudo apt-get update
        sudo apt-get upgrade -y

        sudo apt-get install google-chrome-stable npm -y
        sudo npm cache clean -f
        sudo npm install -g n
        sudo n stable

        sudo npm install --quiet -g @angular/cli@6.0.8

        cd /vagrant/web
        npm install
    SHELL
    config.vm.hostname = "srv01"
    config.vm.network "private_network", ip: "10.0.0.11"
end
