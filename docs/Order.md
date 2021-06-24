# SpeditiondeRestApi.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**module** | **String** |  | [optional] 
**ordernumber** | **String** |  | 
**ordertime** | **Date** |  | [optional] 
**firstname** | **String** |  | 
**lastname** | **String** |  | 
**company** | **String** |  | [optional] 
**department** | **String** |  | [optional] 
**street** | **String** |  | 
**zip** | **String** |  | 
**city** | **String** |  | 
**country** | **String** |  | 
**phone** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**amount** | **Number** |  | [optional] 
**shippingVendor** | **String** | Preselect your installed shipping vendor | [optional] 
**details** | [**[OrderDetail]**](OrderDetail.md) |  | [optional] 

<a name="ShippingVendorEnum"></a>
## Enum: ShippingVendorEnum

* `cargoInternational` (value: `"cargo-international"`)
* `dhl` (value: `"dhl"`)
* `ups` (value: `"ups"`)
* `gelExpress` (value: `"gel-express"`)
* `dsv` (value: `"dsv"`)

