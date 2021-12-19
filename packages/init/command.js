exports.command = 'init'
exports.describe = '初始化命令'
exports.builder = ((argv) => {
  console.log('init', argv);
})
exports.handler = ((argv) => {
  console.log('执行init')
  return require('.')(argv);
})