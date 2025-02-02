##install pm2 globally in your system:
  -npm i -g pm2

#Run node js application on multiple cores (max cpu cores of your system) in watchmode(any changes made to file causes it to restart the process like nodemon):
  -pm2 start index.js -i max --watch

#Logs and list:
  -pm2 logs
  -pm2 list

#Monitor resource usage (CPU, Memory, etc):
  -pm2 monit

#Auto restart processes on reboot:
  -pm2 startup (copy the commands in the terminal and paste them and run.)
  -pm2 save (makes the pm2 remeber which process to auto start)

