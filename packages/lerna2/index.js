const cli = require('@lerna2/cli');
const initCommand = require('@lerna2/init/command');
const createCommand = require('@lerna2/create/command');

module.exports = main;

function main(argv) {
  return cli()
    .command(initCommand)
    .command(createCommand)
    .parse(argv);
}
