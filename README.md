# backend api automation

#install visual studio code for writing codes
 (32bit for ubuntu)
  * https://code.visualstudio.com/Download 
 naviagte to the downloded folder and run below command
  * sudo dpkg -i ~/path/to/code_1.XXX.deb
  run the executable code, it will get launch

#create a folder : 
 * mkdir api_automation
 * cd api_automation

#install NodeJs in your system
 * wget -qO- https://deb.nodesource.com/setup_8.x | sudo bash -
 * sudo apt-get install -y nodejs
verify your installation
 * node --version

# git clone 
  * copy the project in your directory from local environment if available if not, follow below step
  * https://github.com/choudharydk/api_automation.git

# to install the application :
npm install && update

# to run test
npm test

# to show code coverage
npm run coverage

# to open code coverage in browser
npm run showcoverage

