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
 *
 */

import ApiClient from '../ApiClient';
import OrdSide from './OrdSide';

/**
 * The PositionData model module.
 * @module model/PositionData
 * @version v1
 */
class PositionData {
    /**
     * Constructs a new <code>PositionData</code>.
     * The Position object.
     * @alias module:model/PositionData
     */
    constructor() { 
        
        PositionData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PositionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PositionData} obj Optional instance to populate.
     * @return {module:model/PositionData} The populated <code>PositionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PositionData();

            if (data.hasOwnProperty('symbol_id_exchange')) {
                obj['symbol_id_exchange'] = ApiClient.convertToType(data['symbol_id_exchange'], 'String');
            }
            if (data.hasOwnProperty('symbol_id_coinapi')) {
                obj['symbol_id_coinapi'] = ApiClient.convertToType(data['symbol_id_coinapi'], 'String');
            }
            if (data.hasOwnProperty('avg_entry_price')) {
                obj['avg_entry_price'] = ApiClient.convertToType(data['avg_entry_price'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('side')) {
                obj['side'] = OrdSide.constructFromObject(data['side']);
            }
            if (data.hasOwnProperty('unrealized_pnl')) {
                obj['unrealized_pnl'] = ApiClient.convertToType(data['unrealized_pnl'], 'Number');
            }
            if (data.hasOwnProperty('leverage')) {
                obj['leverage'] = ApiClient.convertToType(data['leverage'], 'Number');
            }
            if (data.hasOwnProperty('cross_margin')) {
                obj['cross_margin'] = ApiClient.convertToType(data['cross_margin'], 'Boolean');
            }
            if (data.hasOwnProperty('liquidation_price')) {
                obj['liquidation_price'] = ApiClient.convertToType(data['liquidation_price'], 'Number');
            }
            if (data.hasOwnProperty('raw_data')) {
                obj['raw_data'] = ApiClient.convertToType(data['raw_data'], Object);
            }
        }
        return obj;
    }


}

/**
 * Exchange symbol.
 * @member {String} symbol_id_exchange
 */
PositionData.prototype['symbol_id_exchange'] = undefined;

/**
 * CoinAPI symbol.
 * @member {String} symbol_id_coinapi
 */
PositionData.prototype['symbol_id_coinapi'] = undefined;

/**
 * Calculated average price of all fills on this position.
 * @member {Number} avg_entry_price
 */
PositionData.prototype['avg_entry_price'] = undefined;

/**
 * The current position quantity.
 * @member {Number} quantity
 */
PositionData.prototype['quantity'] = undefined;

/**
 * @member {module:model/OrdSide} side
 */
PositionData.prototype['side'] = undefined;

/**
 * Unrealised profit or loss (PNL) of this position.
 * @member {Number} unrealized_pnl
 */
PositionData.prototype['unrealized_pnl'] = undefined;

/**
 * Leverage for this position reported by the exchange.
 * @member {Number} leverage
 */
PositionData.prototype['leverage'] = undefined;

/**
 * Is cross margin mode enable for this position?
 * @member {Boolean} cross_margin
 */
PositionData.prototype['cross_margin'] = undefined;

/**
 * Liquidation price. If mark price will reach this value, the position will be liquidated.
 * @member {Number} liquidation_price
 */
PositionData.prototype['liquidation_price'] = undefined;

/**
 * @member {Object} raw_data
 */
PositionData.prototype['raw_data'] = undefined;






export default PositionData;

