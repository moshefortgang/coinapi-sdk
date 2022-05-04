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

import * as models from './models';

export interface BalanceData {
    /**
     * Exchange currency code.
     */
    asset_id_exchange?: string;

    /**
     * CoinAPI currency code.
     */
    asset_id_coinapi?: string;

    /**
     * Value of the current total currency balance on the exchange.
     */
    balance?: number;

    /**
     * Value of the current available currency balance on the exchange that can be used as collateral.
     */
    available?: number;

    /**
     * Value of the current locked currency balance by the exchange.
     */
    locked?: number;

    /**
     * Source of the last modification. 
     */
    last_updated_by?: BalanceData.LastUpdatedByEnum;

    /**
     * Current exchange rate to the USD for the single unit of the currency. 
     */
    rate_usd?: number;

    /**
     * Value of the current total traded.
     */
    traded?: number;

}
export namespace BalanceData {
    export enum LastUpdatedByEnum {
        Initialization = <any> 'INITIALIZATION',
        BalanceManager = <any> 'BALANCE_MANAGER',
        Exchange = <any> 'EXCHANGE'
    }
}
