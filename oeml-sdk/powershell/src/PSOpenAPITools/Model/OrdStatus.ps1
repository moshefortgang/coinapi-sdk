#
# EMS - REST API
# This section will provide necessary information about the `CoinAPI EMS REST API` protocol. <br/> This API is also available in the Postman application: <a href=""https://postman.coinapi.io/"" target=""_blank"">https://postman.coinapi.io/</a>       <br/><br/> Implemented Standards:   * [HTTP1.0](https://datatracker.ietf.org/doc/html/rfc1945)  * [HTTP1.1](https://datatracker.ietf.org/doc/html/rfc2616)  * [HTTP2.0](https://datatracker.ietf.org/doc/html/rfc7540) 
# Version: v1
# Contact: support@coinapi.io
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

<#
.SYNOPSIS

No summary available.

.DESCRIPTION

Order statuses and the lifecycle are documented in the separate section: <a href=""#ems-order-lifecycle"">EMS / Starter Guide / Order Lifecycle</a> 

.OUTPUTS

OrdStatus<PSCustomObject>
#>

function Initialize-OrdStatus {
    [CmdletBinding()]
    Param (
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => OrdStatus' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to OrdStatus<PSCustomObject>

.DESCRIPTION

Convert from JSON to OrdStatus<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

OrdStatus<PSCustomObject>
#>
function ConvertFrom-JsonToOrdStatus {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => OrdStatus' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in OrdStatus
        $AllProperties = ()
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        $PSO = [PSCustomObject]@{
        }

        return $PSO
    }

}

