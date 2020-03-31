import assert from 'assert';

import {register, unregisterAll, inject, Types, Errors} from '../src/ioc-container';
import Store from '../src/services/Store';
import Model from '../src/models/Model';

describe('IOC Container', function () {
  beforeEach(function () {
    unregisterAll();
  }),
  describe('register()', function () {
    it('should register and inject a dependency', function () {
      register(Types.SERVICE, Store);
      const storeInstance = inject('service::store');
      assert.equal(storeInstance.constructor.name, 'Store', 'Store is instantiated');
    });

    it('should register services as singletons', function () {
      register(Types.SERVICE, Store);
      const storeInstance1 = inject('service::store');
      storeInstance1.name = 'instance1';
      assert.equal(storeInstance1.name, 'instance1');

      const storeInstance2 = inject('service::store');
      assert.equal(storeInstance2.name, 'instance1');
    });

    it('should regsiter each model as a new instance', function () {
      register(Types.SERVICE, Store);
      register(Types.MODEL, Model);
      const userInstance1 = inject('model::model');
      userInstance1.name = 'instance1';
      const userInstance2 = inject('model::model');
      userInstance2.name = 'instance2';

      assert.equal(userInstance1.name, 'instance1');
      assert.equal(userInstance2.name, 'instance2');
    });
  });

  describe('inject()', function () {
    it('should regsiter each model as a new instance', function () {
      try {
        inject('service::noexist');
        throw new Error();
      } catch (err) {
        assert.equal(err.message, Errors.MODULE_NOT_FOUND);
      }
    });
  });

});
