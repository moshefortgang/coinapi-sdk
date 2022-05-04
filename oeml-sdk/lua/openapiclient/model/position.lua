--[[
  EMS - REST API

  This section will provide necessary information about the `CoinAPI EMS REST API` protocol. <br/> This API is also available in the Postman application: <a href=\"https://postman.coinapi.io/\" target=\"_blank\">https://postman.coinapi.io/</a>       <br/><br/> Implemented Standards:   * [HTTP1.0](https://datatracker.ietf.org/doc/html/rfc1945)  * [HTTP1.1](https://datatracker.ietf.org/doc/html/rfc2616)  * [HTTP2.0](https://datatracker.ietf.org/doc/html/rfc7540) 

  The version of the OpenAPI document: v1
  Contact: support@coinapi.io
  Generated by: https://openapi-generator.tech
]]

-- position class
local position = {}
local position_mt = {
	__name = "position";
	__index = position;
}

local function cast_position(t)
	return setmetatable(t, position_mt)
end

local function new_position(exchange_id, data)
	return cast_position({
		["exchange_id"] = exchange_id;
		["data"] = data;
	})
end

return {
	cast = cast_position;
	new = new_position;
}
