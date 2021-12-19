const yargs = require("yargs/yargs");
const cli = yargs();

const globalOptions = {
  logLevel: {
    type: 'string',
    describe: '日志级别',
    defaultDescription: "info",
    alias: 'L'
  }
}

const globalKeys = Object.keys(globalOptions).concat(['help', 'version'])

module.exports = main;

function main() {
  return cli.options(globalOptions) // 全局配置
    .group(globalKeys, 'global Options') // 分组
    .usage('Usage: $0 <command> [options]') // 格式
    .demandCommand(1, '至少需要一个命令') // 推荐命令
    .strict() // 使用严格模式
    .recommendCommands() // 提示推荐命令
    .fail((msg, err) => {
      console.log(msg);
      console.log(err);
    })
    .alias('h', 'help')
    .alias('v', 'version')
    .epilogue(
      `
      When a command fails, all logs are written to lerna-debug.log in the current working directory.

      For more information, find our manual at https://github.com/lerna/lerna
    `
    )
}
