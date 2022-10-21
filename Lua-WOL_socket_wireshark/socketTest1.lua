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


mac_dest = "f0:1f:af:5f:3a:79"--arg[1]

socket = require("socket")
ip="255.255.255.0"
port=30672--6000
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
mac2 = string.char(0xff,0xff,0xff,0xff,0xff,0xff)..mac1
assert(udp:sendto(mac2, ip, port))
print("Wake-On-Lan packet sent to MAC address ")
