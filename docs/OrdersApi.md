# SpeditiondeRestApi.OrdersApi

All URIs are relative to *https://cargo.ib53.de/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrder**](OrdersApi.md#createOrder) | **POST** /orders | Create order
[**listOrders**](OrdersApi.md#listOrders) | **GET** /orders | List orders
[**ordersIdDelete**](OrdersApi.md#ordersIdDelete) | **DELETE** /orders/{id} | Delete order by id
[**ordersIdGet**](OrdersApi.md#ordersIdGet) | **GET** /orders/{id} | Show order by id
[**ordersIdPut**](OrdersApi.md#ordersIdPut) | **PUT** /orders/{id} | Update order by id

<a name="createOrder"></a>
# **createOrder**
> Order createOrder(body)

Create order

### Example
```javascript
import {SpeditiondeRestApi} from 'speditionde_rest_api';
let defaultClient = SpeditiondeRestApi.ApiClient.instance;


let apiInstance = new SpeditiondeRestApi.OrdersApi();
let body = new SpeditiondeRestApi.Order(); // Order | 

apiInstance.createOrder(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Order**](Order.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listOrders"></a>
# **listOrders**
> OrderCollection listOrders()

List orders

### Example
```javascript
import {SpeditiondeRestApi} from 'speditionde_rest_api';
let defaultClient = SpeditiondeRestApi.ApiClient.instance;


let apiInstance = new SpeditiondeRestApi.OrdersApi();
apiInstance.listOrders((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OrderCollection**](OrderCollection.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersIdDelete"></a>
# **ordersIdDelete**
> ordersIdDelete(id)

Delete order by id

### Example
```javascript
import {SpeditiondeRestApi} from 'speditionde_rest_api';
let defaultClient = SpeditiondeRestApi.ApiClient.instance;


let apiInstance = new SpeditiondeRestApi.OrdersApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="ordersIdGet"></a>
# **ordersIdGet**
> Order ordersIdGet(id)

Show order by id

### Example
```javascript
import {SpeditiondeRestApi} from 'speditionde_rest_api';
let defaultClient = SpeditiondeRestApi.ApiClient.instance;


let apiInstance = new SpeditiondeRestApi.OrdersApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="ordersIdPut"></a>
# **ordersIdPut**
> Order ordersIdPut(body, id)

Update order by id

### Example
```javascript
import {SpeditiondeRestApi} from 'speditionde_rest_api';
let defaultClient = SpeditiondeRestApi.ApiClient.instance;


let apiInstance = new SpeditiondeRestApi.OrdersApi();
let body = new SpeditiondeRestApi.Order(); // Order | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.ordersIdPut(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Order**](Order.md)|  | 
 **id** | [**String**](.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

