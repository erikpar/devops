# DevOps Exercise
As i am working on windows laptop  ansible didnt work so i changed vagrant file to run ansible_local
the bamboo nodejs didnt work so i changed the code:
var HttpDispatcher = require('httpdispatcher');
var dispatcher     = new HttpDispatcher();

run vagrant up
ansible will install 2 roles:
1. counter-panda: http://localhost:8080
    click post and wait to see the counter
2. gify-panda:  http://localhost:8000
    click on file to see the panda
