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
    describe('ListMetaLinks', function() {
      beforeEach(function() {
        instance = new SpeditiondeRestApi.ListMetaLinks();
      });

      it('should create an instance of ListMetaLinks', function() {
        // TODO: update the code to test ListMetaLinks
        expect(instance).to.be.a(SpeditiondeRestApi.ListMetaLinks);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

      it('should have the property label (base name: "label")', function() {
        // TODO: update the code to test the property label
        expect(instance).to.have.property('label');
        // expect(instance.label).to.be(expectedValueLiteral);
      });

      it('should have the property active (base name: "active")', function() {
        // TODO: update the code to test the property active
        expect(instance).to.have.property('active');
        // expect(instance.active).to.be(expectedValueLiteral);
      });

    });
  });

}));
