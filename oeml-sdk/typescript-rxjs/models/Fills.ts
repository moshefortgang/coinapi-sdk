// tslint:disable
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

/**
 * @export
 * @interface Fills
 */
export interface Fills {
    /**
     * Execution time.
     * @type {string}
     * @memberof Fills
     */
    time?: string;
    /**
     * Execution price.
     * @type {number}
     * @memberof Fills
     */
    price?: number;
    /**
     * Executed quantity.
     * @type {number}
     * @memberof Fills
     */
    amount?: number;
}
