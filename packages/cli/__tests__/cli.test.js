'use strict';

const cli = require('..');

describe('@/lerna2/cli', () => {
    it('cli tests', () => {
      expect(cli()).toBe("cli");
    });
});
