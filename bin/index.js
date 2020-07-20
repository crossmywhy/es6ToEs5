#!/usr/bin/env node
/**
 * Nodejs 读写流
 * Nodejs 级联创建文件夹
 * 递归循环遍历
 * Babel 插件，代码转换工具
 * Nodejs 核心API，fs,path
 * Nodejs ui工具
 */

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const dname = __dirname;
const context = process.cwd();
const utils = require('../utils/index');
const targetDir = 'src';
const transformDir = path.resolve(context, targetDir);
const buildDir = 'build';
const buildDirPath = path.resolve(context, 'build');
// 获取目标目下下的所有映射关系
const getAllFileList = () => {
  return new Promise((resolve, reject) => {
    resolve(utils.walkFileTree(transformDir));
  });
};

const pipe = () => {
  getAllFileList().then((fileList) => {
    fileList
      .map(({filename, filePath, dir}) => {
        return {
          filename,
          dir,
          oldFilePath: filePath,
          filePath: filePath.replace(targetDir, buildDir),
        };
      })
      .forEach(({filename, oldFilePath, filePath, dir}) => {
        mkdirp.sync(dir.replace(targetDir, buildDir));
        //TODO 读文件内容
        //src/a.js src/b.js 写入build/a.js b.js
        // 编译的操作， babel node如何接入babel，babel-transform,babel-core
      });
  });
};

pipe();
// mkdirp.sync(buildDirPath);
