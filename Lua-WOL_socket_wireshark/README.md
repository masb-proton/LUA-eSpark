# Test WOL-WakeOnLine pakcet with wireshark using LUA - working example!



## Run the following scripts to install tools required for WOL with LUA 

Install ethernet tools with  (```sudo apt install net-tools```)
also need (```sudo apt install ethtool```)

Run this script to get your ethernet WOL enabled refrence https://necromuralist.github.io/posts/enabling-wake-on-lan/

Get the Ethernet(LAN) info use the command to get details
here collect the Ethnernet Name it will be like en....
 ```ip a```

Add the Ethernet Name with this command 
  ```sudo ethtool enp0s25```

Here g must be present to use WOL packet succesfully  more info at `https://necromuralist.github.io/posts/enabling-wake-on-lan/`
  ```sudo ethtool --change enp0s25 wol g```
  
Run the remaining commands to complete setup WOL
  ```which ethtool```
  
  WOL install command
  ```sudo apt install wakeonlan```
  
Now update the System

```sudo apt update```


Now installing the wireshark using cmds

```sudo apt install wireshark```

Now update the System
```sudo apt update```

Please restart the system to work successfully

```sudo reboot```

Check if there is not an issue/error?

```sudo usermod -aG wireshark $(whoami)```
  
## Add the following code to your lua file with your LAN MAC address updated

*Lua-WOL_socket_wireshark.lua
```java
--https://gist.github.com/filewalkwithme/2865500

function split(str, pat)
    local t = {}
    local fpat = "(.-)" .. pat
    local last_end = 1
    local s, e, cap = str:find(fpat, 1)
    while s do
       if s ~= 1 or cap ~= "" then
      table.insert(t,cap)
       end
       last_end = e+1
       s, e, cap = str:find(fpat, last_end)
    end
    if last_end <= #str then
       cap = str:sub(last_end)
       table.insert(t, cap)
    end
    return t
 end
 
 
mac_dest = "f0:1f:af:5f:3a:79"   --here use the MAC Address of your LAN interface
 
 socket = require("socket")
 ip="255.255.255.0"
 port=30672     --6000 can also be used
 udp = assert(socket.udp())
 udp:setoption('broadcast', true)
 udp:setsockname("*", 0)   -- commenting this may result refuse
 udp:settimeout(0)   


 mac_array=split(mac_dest, ":")
 mac = ""
 for i,v in ipairs(mac_array) do mac = mac..string.char(tonumber("0x"..v));  end
 mac1=""
 for i=1,16 do
  mac1 = mac1..mac
 end
mac2 = string.char(0xff,0xff,0xff,0xff,0xff,0xff)..mac1		--This is a magic packet data
assert(udp:sendto(mac2, ip, port))
 print("Wake-On-Lan packet sent to MAC address ")
```
