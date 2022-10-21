local http = require("socket.http")
local ltn12 = require 'ltn12'

local body = {}
local res, code, headers, status = http.request{
  url = "https://webhook.site/1ce42d6e-07ba-4c6a-88fb-95b18e0086cb",
  sink = ltn12.sink.table(body)
}
print("Done!!!")