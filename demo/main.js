const fs = require('fs');
const path = require('path');
const ThriftTool = require('../src');
const tt = new ThriftTool();
const source = fs.readFileSync(path.join(__dirname, 'thrift.idl'), 'ascii');
const res = tt.parse(source);
console.log(JSON.stringify(res, undefined, 2));