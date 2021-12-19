exports.command = 'create <name>'
exports.describe = '创建一个新lerna 管理包'
exports.builder = ((yargs) => {
  console.log('create', yargs);
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
})
exports.handler = ((argv) => {
  console.log('执行create')
  return require('.')(argv);
})