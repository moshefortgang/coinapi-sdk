/**
 * EMS - REST API
 * This section will provide necessary information about the `CoinAPI EMS REST API` protocol. <br/> This API is also available in the Postman application: <a href=\"https://postman.coinapi.io/\" target=\"_blank\">https://postman.coinapi.io/</a>       <br/><br/> Implemented Standards:   * [HTTP1.0](https://datatracker.ietf.org/doc/html/rfc1945)  * [HTTP1.1](https://datatracker.ietf.org/doc/html/rfc2616)  * [HTTP2.0](https://datatracker.ietf.org/doc/html/rfc7540) 
 *
 * The version of the OpenAPI document: v1
 * Contact: support@coinapi.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package org.openapitools.client.model;

import java.math.BigDecimal;
import java.util.*;
import java.util.Date;
import org.openapitools.client.model.OrdSide;
import org.openapitools.client.model.OrdType;
import org.openapitools.client.model.TimeInForce;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

/**
 * The new order message.
 **/
@ApiModel(description = "The new order message.")
public class OrderNewSingleRequest {
  
  @SerializedName("exchange_id")
  private String exchangeId = null;
  @SerializedName("client_order_id")
  private String clientOrderId = null;
  @SerializedName("symbol_id_exchange")
  private String symbolIdExchange = null;
  @SerializedName("symbol_id_coinapi")
  private String symbolIdCoinapi = null;
  @SerializedName("amount_order")
  private BigDecimal amountOrder = null;
  @SerializedName("price")
  private BigDecimal price = null;
  @SerializedName("side")
  private OrdSide side = null;
  @SerializedName("order_type")
  private OrdType orderType = null;
  @SerializedName("time_in_force")
  private TimeInForce timeInForce = null;
  @SerializedName("expire_time")
  private Date expireTime = null;
  public enum List&lt;ExecInstEnum&gt; {
     MAKER_OR_CANCEL,  AUCTION_ONLY,  INDICATION_OF_INTEREST, 
  };
  @SerializedName("exec_inst")
  private List<ExecInstEnum> execInst = null;

  /**
   * Exchange identifier used to identify the routing destination.
   **/
  @ApiModelProperty(required = true, value = "Exchange identifier used to identify the routing destination.")
  public String getExchangeId() {
    return exchangeId;
  }
  public void setExchangeId(String exchangeId) {
    this.exchangeId = exchangeId;
  }

  /**
   * The unique identifier of the order assigned by the client.
   **/
  @ApiModelProperty(required = true, value = "The unique identifier of the order assigned by the client.")
  public String getClientOrderId() {
    return clientOrderId;
  }
  public void setClientOrderId(String clientOrderId) {
    this.clientOrderId = clientOrderId;
  }

  /**
   * Exchange symbol. One of the properties (`symbol_id_exchange`, `symbol_id_coinapi`) is required to identify the market for the new order.
   **/
  @ApiModelProperty(value = "Exchange symbol. One of the properties (`symbol_id_exchange`, `symbol_id_coinapi`) is required to identify the market for the new order.")
  public String getSymbolIdExchange() {
    return symbolIdExchange;
  }
  public void setSymbolIdExchange(String symbolIdExchange) {
    this.symbolIdExchange = symbolIdExchange;
  }

  /**
   * CoinAPI symbol. One of the properties (`symbol_id_exchange`, `symbol_id_coinapi`) is required to identify the market for the new order.
   **/
  @ApiModelProperty(value = "CoinAPI symbol. One of the properties (`symbol_id_exchange`, `symbol_id_coinapi`) is required to identify the market for the new order.")
  public String getSymbolIdCoinapi() {
    return symbolIdCoinapi;
  }
  public void setSymbolIdCoinapi(String symbolIdCoinapi) {
    this.symbolIdCoinapi = symbolIdCoinapi;
  }

  /**
   * Order quantity.
   **/
  @ApiModelProperty(required = true, value = "Order quantity.")
  public BigDecimal getAmountOrder() {
    return amountOrder;
  }
  public void setAmountOrder(BigDecimal amountOrder) {
    this.amountOrder = amountOrder;
  }

  /**
   * Order price.
   **/
  @ApiModelProperty(required = true, value = "Order price.")
  public BigDecimal getPrice() {
    return price;
  }
  public void setPrice(BigDecimal price) {
    this.price = price;
  }

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public OrdSide getSide() {
    return side;
  }
  public void setSide(OrdSide side) {
    this.side = side;
  }

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public OrdType getOrderType() {
    return orderType;
  }
  public void setOrderType(OrdType orderType) {
    this.orderType = orderType;
  }

  /**
   **/
  @ApiModelProperty(required = true, value = "")
  public TimeInForce getTimeInForce() {
    return timeInForce;
  }
  public void setTimeInForce(TimeInForce timeInForce) {
    this.timeInForce = timeInForce;
  }

  /**
   * Expiration time. Conditionaly required for orders with time_in_force = `GOOD_TILL_TIME_EXCHANGE` or `GOOD_TILL_TIME_OEML`.
   **/
  @ApiModelProperty(value = "Expiration time. Conditionaly required for orders with time_in_force = `GOOD_TILL_TIME_EXCHANGE` or `GOOD_TILL_TIME_OEML`.")
  public Date getExpireTime() {
    return expireTime;
  }
  public void setExpireTime(Date expireTime) {
    this.expireTime = expireTime;
  }

  /**
   * Order execution instructions are documented in the separate section: <a href=\"#ems-order-params-exec\">EMS / Starter Guide / Order parameters / Execution instructions</a> 
   **/
  @ApiModelProperty(value = "Order execution instructions are documented in the separate section: <a href=\"#ems-order-params-exec\">EMS / Starter Guide / Order parameters / Execution instructions</a> ")
  public List<ExecInstEnum> getExecInst() {
    return execInst;
  }
  public void setExecInst(List<ExecInstEnum> execInst) {
    this.execInst = execInst;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrderNewSingleRequest orderNewSingleRequest = (OrderNewSingleRequest) o;
    return (this.exchangeId == null ? orderNewSingleRequest.exchangeId == null : this.exchangeId.equals(orderNewSingleRequest.exchangeId)) &&
        (this.clientOrderId == null ? orderNewSingleRequest.clientOrderId == null : this.clientOrderId.equals(orderNewSingleRequest.clientOrderId)) &&
        (this.symbolIdExchange == null ? orderNewSingleRequest.symbolIdExchange == null : this.symbolIdExchange.equals(orderNewSingleRequest.symbolIdExchange)) &&
        (this.symbolIdCoinapi == null ? orderNewSingleRequest.symbolIdCoinapi == null : this.symbolIdCoinapi.equals(orderNewSingleRequest.symbolIdCoinapi)) &&
        (this.amountOrder == null ? orderNewSingleRequest.amountOrder == null : this.amountOrder.equals(orderNewSingleRequest.amountOrder)) &&
        (this.price == null ? orderNewSingleRequest.price == null : this.price.equals(orderNewSingleRequest.price)) &&
        (this.side == null ? orderNewSingleRequest.side == null : this.side.equals(orderNewSingleRequest.side)) &&
        (this.orderType == null ? orderNewSingleRequest.orderType == null : this.orderType.equals(orderNewSingleRequest.orderType)) &&
        (this.timeInForce == null ? orderNewSingleRequest.timeInForce == null : this.timeInForce.equals(orderNewSingleRequest.timeInForce)) &&
        (this.expireTime == null ? orderNewSingleRequest.expireTime == null : this.expireTime.equals(orderNewSingleRequest.expireTime)) &&
        (this.execInst == null ? orderNewSingleRequest.execInst == null : this.execInst.equals(orderNewSingleRequest.execInst));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.exchangeId == null ? 0: this.exchangeId.hashCode());
    result = 31 * result + (this.clientOrderId == null ? 0: this.clientOrderId.hashCode());
    result = 31 * result + (this.symbolIdExchange == null ? 0: this.symbolIdExchange.hashCode());
    result = 31 * result + (this.symbolIdCoinapi == null ? 0: this.symbolIdCoinapi.hashCode());
    result = 31 * result + (this.amountOrder == null ? 0: this.amountOrder.hashCode());
    result = 31 * result + (this.price == null ? 0: this.price.hashCode());
    result = 31 * result + (this.side == null ? 0: this.side.hashCode());
    result = 31 * result + (this.orderType == null ? 0: this.orderType.hashCode());
    result = 31 * result + (this.timeInForce == null ? 0: this.timeInForce.hashCode());
    result = 31 * result + (this.expireTime == null ? 0: this.expireTime.hashCode());
    result = 31 * result + (this.execInst == null ? 0: this.execInst.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrderNewSingleRequest {\n");
    
    sb.append("  exchangeId: ").append(exchangeId).append("\n");
    sb.append("  clientOrderId: ").append(clientOrderId).append("\n");
    sb.append("  symbolIdExchange: ").append(symbolIdExchange).append("\n");
    sb.append("  symbolIdCoinapi: ").append(symbolIdCoinapi).append("\n");
    sb.append("  amountOrder: ").append(amountOrder).append("\n");
    sb.append("  price: ").append(price).append("\n");
    sb.append("  side: ").append(side).append("\n");
    sb.append("  orderType: ").append(orderType).append("\n");
    sb.append("  timeInForce: ").append(timeInForce).append("\n");
    sb.append("  expireTime: ").append(expireTime).append("\n");
    sb.append("  execInst: ").append(execInst).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
