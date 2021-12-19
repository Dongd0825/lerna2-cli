"use strict";

const fs = require("fs-extra");
const path = require("path");
const initPackageJson = require("pify")(require('init-package-json'));

module.exports = factory;

function factory(argv) {
  return new CreateCommand(argv);
}

class CreateCommand {
  constructor(options) {
    this.options = options;
    this.rootPath = path.resolve();
    this.execute();
  }

  async execute() {
    const { name, registry } = this.options;
    const targetDir = path.join(this.rootPath, `packages/${name}`);
    this.targetDir = targetDir;
    await this.createlibDir();
    await this.createtestDir();
    console.log("创建")
    //  第二个参数一定要
    await initPackageJson(this.targetDir, "")
  }
  async createlibDir() {
    const libDir = path.join(this.targetDir, 'lib');
    await fs.mkdirp(libDir);
  }

  async createtestDir() {
    const testDir = path.join(this.targetDir, '__tests__');
    await fs.mkdirp(testDir);
  }
}

