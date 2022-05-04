/*
 * EMS - REST API
 *
 * This section will provide necessary information about the `CoinAPI EMS REST API` protocol. <br/> This API is also available in the Postman application: <a href=\"https://postman.coinapi.io/\" target=\"_blank\">https://postman.coinapi.io/</a>       <br/><br/> Implemented Standards:   * [HTTP1.0](https://datatracker.ietf.org/doc/html/rfc1945)  * [HTTP1.1](https://datatracker.ietf.org/doc/html/rfc2616)  * [HTTP2.0](https://datatracker.ietf.org/doc/html/rfc7540) 
 *
 * The version of the OpenAPI document: v1
 * Contact: support@coinapi.io
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = CoinAPI.OMS.REST.V1.Client.OpenAPIDateConverter;

namespace CoinAPI.OMS.REST.V1.Model
{
    /// <summary>
    /// Order types are documented in the separate section: &lt;a href&#x3D;\&quot;#ems-order-params-type\&quot;&gt;EMS / Starter Guide / Order parameters / Order type&lt;/a&gt; 
    /// </summary>
    /// <value>Order types are documented in the separate section: &lt;a href&#x3D;\&quot;#ems-order-params-type\&quot;&gt;EMS / Starter Guide / Order parameters / Order type&lt;/a&gt; </value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum OrdType
    {
        /// <summary>
        /// Enum LIMIT for value: LIMIT
        /// </summary>
        [EnumMember(Value = "LIMIT")]
        LIMIT = 1

    }

}
