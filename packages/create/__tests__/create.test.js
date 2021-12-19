'use strict';

const create = require('..');

describe('@/lerna2/create', () => {
    it('create tests', () => {
      expect(create()).toBe("create");
    });
});
