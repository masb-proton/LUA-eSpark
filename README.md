# Setup for Ubuntu 22.04 with VisualStudio Code

*VisualStudio Code Download And Install	https://code.visualstudio.com/docs/setup/linux

Installing commands
`sudo apt install apt-transport-https`

Updating the system
`sudo apt update`

Installing VSCode using cmds
`sudo apt install code # or code-insiders`


Install two extensions in VSCODE for Intellisense and Debug
*Lua Debug	v1.60.0		actboy168	306,301	(9)	VSCode debugger extension for Lua
*Lua	v0.2.19	Tencent	148,005	(35)	LuaHelper, Intellisense, Linting, Debugging, Code formatting, Highperformance, and more.


We install only lua5.4 as older versions may not fit to the requirements

`sudo apt install lua5.4`


*https://www.educba.com/lua-http/	 https://luarocks.org/#quick-start

`wget https://luarocks.org/releases/luarocks-3.9.1.tar.gz`

Luarock download and install
`tar zxpf luarocks-3.9.1.tar.gz`

Changing Directory
`cd luarocks-3.9.1`
		
*https://installati.one/ubuntu/22.04/liblua5.4-dev/

```
sudo apt-get update

sudo apt-get -y install liblua5.4-dev

./configure --lua-version=5.4

sudo make install

sudo make bootstrap

./configure && make && sudo make install

sudo luarocks install luasocket
```

Issue handling scripts for "https.lua:66: bad argument #2 to 'method' (string expected, got light userdata)"
*reference at https://github.com/luarocks/luarocks/issues/1309	https://howtoinstall.co/en/lua-sec

```
sudo luarocks install openssl
sudo apt -y install libssl-dev
sudo luarocks install luasec OPENSSL_DIR=/usr/local

sudo apt-get update
sudo apt-get install lua-sec
```


lets run lua to check if socket is running without error
`lua`

check if it installed correctly it will return table - enter the following command

`require "socket"`


if there is some error you got then please run the following scripts and try again the above command

```
apt remove lua-socket
apt remove lua-sec

sudo luarocks install openssl
sudo apt -y install libssl-dev
sudo luarocks install luasec OPENSSL_DIR=/usr/local

luarocks install luasocket
luarocks install luasec
```
