/*
 * Spedition.de REST API
 *  ## Authorization  Authorization is done with an API token submitted in the authorization header of your request.  `Authorization: Bearer <token>`  ## Date and time format Timezone: Dependent on your account settings. Defaults to `Europe/Berlin`. * **Date** = *Y-m-d* = `2021-01-01` * **Time** = *H:i* = `10:14` * **Date & time** = Y-m-d\\TH:i:sP = `2020-12-09T16:09:53+00:00` or any RFC 3339 compliant date time format.
 *
 * OpenAPI spec version: 1.0.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.26
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from './ApiClient';
import {List} from './model/List';
import {ListLinks} from './model/ListLinks';
import {ListMeta} from './model/ListMeta';
import {ListMetaLinks} from './model/ListMetaLinks';
import {Order} from './model/Order';
import {OrderCollection} from './model/OrderCollection';
import {OrderDetail} from './model/OrderDetail';
import {ValidationError} from './model/ValidationError';
import {OrdersApi} from './api/OrdersApi';

/**
* _AuthorizationAuthorization_is_done_with_an_API_token_submitted_in_the_authorization_header_of_your_request_Authorization_Bearer_token_Date_and_time_formatTimezone_Dependent_on_your_account_settings__Defaults_to_EuropeBerlin__Date__Y_m_d__2021_01_01_Time__Hi__1014_Date__time__Y_m_dTHisP__2020_12_09T1609530000_or_any_RFC_3339_compliant_date_time_format_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SpeditiondeRestApi = require('index'); // See note below*.
* var xxxSvc = new SpeditiondeRestApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SpeditiondeRestApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SpeditiondeRestApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SpeditiondeRestApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.5
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The List model constructor.
     * @property {module:model/List}
     */
    List,

    /**
     * The ListLinks model constructor.
     * @property {module:model/ListLinks}
     */
    ListLinks,

    /**
     * The ListMeta model constructor.
     * @property {module:model/ListMeta}
     */
    ListMeta,

    /**
     * The ListMetaLinks model constructor.
     * @property {module:model/ListMetaLinks}
     */
    ListMetaLinks,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The OrderCollection model constructor.
     * @property {module:model/OrderCollection}
     */
    OrderCollection,

    /**
     * The OrderDetail model constructor.
     * @property {module:model/OrderDetail}
     */
    OrderDetail,

    /**
     * The ValidationError model constructor.
     * @property {module:model/ValidationError}
     */
    ValidationError,

    /**
    * The OrdersApi service constructor.
    * @property {module:api/OrdersApi}
    */
    OrdersApi
};
