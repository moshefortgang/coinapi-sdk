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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EmsRestApi);
  }
}(this, function(expect, EmsRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EmsRestApi.BalanceData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BalanceData', function() {
    it('should create an instance of BalanceData', function() {
      // uncomment below and update the code to test BalanceData
      //var instance = new EmsRestApi.BalanceData();
      //expect(instance).to.be.a(EmsRestApi.BalanceData);
    });

    it('should have the property assetIdExchange (base name: "asset_id_exchange")', function() {
      // uncomment below and update the code to test the property assetIdExchange
      //var instance = new EmsRestApi.BalanceData();
      //expect(instance).to.be();
    });

    it('should have the property assetIdCoinapi (base name: "asset_id_coinapi")', function() {
      // uncomment below and update the code to test the property assetIdCoinapi
      //var instance = new EmsRestApi.BalanceData();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instance = new EmsRestApi.BalanceData();
      //expect(instance).to.be();
    });

    it('should have the property available (base name: "available")', function() {
      // uncomment below and update the code to test the property available
      //var instance = new EmsRestApi.BalanceData();
      //expect(instance).to.be();
    });

    it('should have the property locked (base name: "locked")', function() {
      // uncomment below and update the code to test the property locked
      //var instance = new EmsRestApi.BalanceData();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdatedBy (base name: "last_updated_by")', function() {
      // uncomment below and update the code to test the property lastUpdatedBy
      //var instance = new EmsRestApi.BalanceData();
      //expect(instance).to.be();
    });

    it('should have the property rateUsd (base name: "rate_usd")', function() {
      // uncomment below and update the code to test the property rateUsd
      //var instance = new EmsRestApi.BalanceData();
      //expect(instance).to.be();
    });

    it('should have the property traded (base name: "traded")', function() {
      // uncomment below and update the code to test the property traded
      //var instance = new EmsRestApi.BalanceData();
      //expect(instance).to.be();
    });

  });

}));
