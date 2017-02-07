# -*- mode: ruby -*-
# vi: set ft=ruby :
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "ubuntu/trusty64"
  config.vm.provider "virtualbox" do |v|
    v.memory = 1024
  end
  
  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "base.yml"
  end

  config.ssh.forward_agent = true
  config.vm.network "private_network", type: "dhcp"

  # Create a base machine 
  config.vm.define "base" do |base|
      base.vm.network :forwarded_port, host: 8080, guest: 8080
	  base.vm.network :forwarded_port, host: 8000, guest: 8000
  end
end
