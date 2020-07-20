const fs = require('fs');
const path = require('path');

// 判断是否是目录
const isDir = (name) => {
  const stats = fs.statSync(name);
  return stats.isDirectory();
};

// 写文件
const writeFile = (filename, data, options = {encoding: 'utf8'}) => {
  fs.writeFileSync(filename, data, options);
};

// 读文件
const readFile = (filename) => {
  fs.readFileSync(filename);
};

// 递归遍历目录
const walkFileTree = (filepath, result = []) => {
  let fileList = fs.readdirSync(filepath);
  fileList.forEach((file) => {
    if (isDir(path.resolve(filepath, file))) {
      walkFileTree(path.resolve(filepath, file), result);
    } else {
      result.push({
        filename: file,
        dir: filepath,
        filePath: path.resolve(filepath, file),
      });
    }
  });
  return result;
};

module.exports = {
  walkFileTree,
  isDir,
  writeFile,
  readFile,
};
