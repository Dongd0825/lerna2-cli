'use strict';

const init = require('..');

describe('@/lerna2/init', () => {
    it('init tests', () => {
      expect(init()).toBe("init");
    });
});
