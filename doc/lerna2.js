const yargs = require("yargs/yargs");
const argv = process.argv.slice(2);
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

cli.options(globalOptions) // 全局配置
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
  .command({
    command: 'create <name>',// 命令格式
    describe: '创建包',
    builder: (yargs) => {
      yargs
        .positional("name", {
          type: "string",
          describe: "包名"
        })
        .options({
          registry: {
            group: "command Group",
            describe: "配置包的发布地址",
            type: 'string'
          }
        })
    },
    handler: (argv) => {
      console.log("argv", argv)
    }
  })
  .parse(argv)

