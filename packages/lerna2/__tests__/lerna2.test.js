'use strict';

const lerna2 = require('..');

describe('@/lerna2/lerna2', () => {
    it('lerna2 tests', () => {
      expect(lerna2()).toBe("lerna2");
    });
});
