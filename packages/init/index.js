"use strict";

const fs = require("fs-extra");
const path = require("path");
const execa = require('execa')

module.exports = factory;

function factory(argv) {
  return new InitCommand(argv);
}

class InitCommand{
  constructor(options) {
    this.options = options;
    this.rootPath = path.resolve();
    this.execute();
  }

  async execute() {
    console.info('初始化.git initializing Git repository');
    await execa("git", ["init"], {stdio: 'pipe'});
    await this.ensurePackageJSON();
    await this.ensureLernaConfig();
    await this.ensurePackageDir();
  }
  async ensurePackageJSON() {
    console.info("创建package.json");
    await fs.writeJSON(path.join(this.rootPath, "package.json"), {
        "name": "root",
        "private": true,
        "devDependencies": {
          "lerna": "^4.0.0"
        },
      },
      {
        spaces: 2
      }
    )
  }
  async ensurePackageDir() {
    console.log('创建packages 文件')
    await fs.mkdir(path.join(this.rootPath, 'packages'))
  }
  async ensureLernaConfig() {
    console.log('创建lerna.json 文件')
    await fs.writeJSON(path.join(this.rootPath, "lerna.json"), {
      "packages": [
        "packages/*"
      ],
      "version": "0.0.0"
    },
    {
      spaces: 2
    })
  }
}