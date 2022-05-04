--[[
  EMS - REST API

  This section will provide necessary information about the `CoinAPI EMS REST API` protocol. <br/> This API is also available in the Postman application: <a href=\"https://postman.coinapi.io/\" target=\"_blank\">https://postman.coinapi.io/</a>       <br/><br/> Implemented Standards:   * [HTTP1.0](https://datatracker.ietf.org/doc/html/rfc1945)  * [HTTP1.1](https://datatracker.ietf.org/doc/html/rfc2616)  * [HTTP2.0](https://datatracker.ietf.org/doc/html/rfc7540) 

  The version of the OpenAPI document: v1
  Contact: support@coinapi.io
  Generated by: https://openapi-generator.tech
]]

-- order_execution_report class
local order_execution_report = {}
local order_execution_report_mt = {
	__name = "order_execution_report";
	__index = order_execution_report;
}

local function cast_order_execution_report(t)
	return setmetatable(t, order_execution_report_mt)
end

local function new_order_execution_report(exchange_id, client_order_id, symbol_id_exchange, symbol_id_coinapi, amount_order, price, side, order_type, time_in_force, expire_time, exec_inst, client_order_id_format_exchange, exchange_order_id, amount_open, amount_filled, avg_px, status, status_history, error_message, fills)
	return cast_order_execution_report({
		["exchange_id"] = exchange_id;
		["client_order_id"] = client_order_id;
		["symbol_id_exchange"] = symbol_id_exchange;
		["symbol_id_coinapi"] = symbol_id_coinapi;
		["amount_order"] = amount_order;
		["price"] = price;
		["side"] = side;
		["order_type"] = order_type;
		["time_in_force"] = time_in_force;
		["expire_time"] = expire_time;
		["exec_inst"] = exec_inst;
		["client_order_id_format_exchange"] = client_order_id_format_exchange;
		["exchange_order_id"] = exchange_order_id;
		["amount_open"] = amount_open;
		["amount_filled"] = amount_filled;
		["avg_px"] = avg_px;
		["status"] = status;
		["status_history"] = status_history;
		["error_message"] = error_message;
		["fills"] = fills;
	})
end

return {
	cast = cast_order_execution_report;
	new = new_order_execution_report;
}
