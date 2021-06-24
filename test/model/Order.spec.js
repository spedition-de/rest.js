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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SpeditiondeRestApi);
  }
}(this, function(expect, SpeditiondeRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Order', function() {
      beforeEach(function() {
        instance = new SpeditiondeRestApi.Order();
      });

      it('should create an instance of Order', function() {
        // TODO: update the code to test Order
        expect(instance).to.be.a(SpeditiondeRestApi.Order);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property module (base name: "module")', function() {
        // TODO: update the code to test the property module
        expect(instance).to.have.property('module');
        // expect(instance.module).to.be(expectedValueLiteral);
      });

      it('should have the property ordernumber (base name: "ordernumber")', function() {
        // TODO: update the code to test the property ordernumber
        expect(instance).to.have.property('ordernumber');
        // expect(instance.ordernumber).to.be(expectedValueLiteral);
      });

      it('should have the property ordertime (base name: "ordertime")', function() {
        // TODO: update the code to test the property ordertime
        expect(instance).to.have.property('ordertime');
        // expect(instance.ordertime).to.be(expectedValueLiteral);
      });

      it('should have the property firstname (base name: "firstname")', function() {
        // TODO: update the code to test the property firstname
        expect(instance).to.have.property('firstname');
        // expect(instance.firstname).to.be(expectedValueLiteral);
      });

      it('should have the property lastname (base name: "lastname")', function() {
        // TODO: update the code to test the property lastname
        expect(instance).to.have.property('lastname');
        // expect(instance.lastname).to.be(expectedValueLiteral);
      });

      it('should have the property company (base name: "company")', function() {
        // TODO: update the code to test the property company
        expect(instance).to.have.property('company');
        // expect(instance.company).to.be(expectedValueLiteral);
      });

      it('should have the property department (base name: "department")', function() {
        // TODO: update the code to test the property department
        expect(instance).to.have.property('department');
        // expect(instance.department).to.be(expectedValueLiteral);
      });

      it('should have the property street (base name: "street")', function() {
        // TODO: update the code to test the property street
        expect(instance).to.have.property('street');
        // expect(instance.street).to.be(expectedValueLiteral);
      });

      it('should have the property zip (base name: "zip")', function() {
        // TODO: update the code to test the property zip
        expect(instance).to.have.property('zip');
        // expect(instance.zip).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property amount (base name: "amount")', function() {
        // TODO: update the code to test the property amount
        expect(instance).to.have.property('amount');
        // expect(instance.amount).to.be(expectedValueLiteral);
      });

      it('should have the property shippingVendor (base name: "shipping_vendor")', function() {
        // TODO: update the code to test the property shippingVendor
        expect(instance).to.have.property('shippingVendor');
        // expect(instance.shippingVendor).to.be(expectedValueLiteral);
      });

      it('should have the property details (base name: "details")', function() {
        // TODO: update the code to test the property details
        expect(instance).to.have.property('details');
        // expect(instance.details).to.be(expectedValueLiteral);
      });

    });
  });

}));