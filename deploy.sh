#!/bin/bash

pm2 stop app.js
pm2 delete app.js
sudo npm install
PORT=5000 pm2 start app.js