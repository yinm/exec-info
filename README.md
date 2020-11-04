# exec-info
print JavaScript code and execution result to console.

## Installation

```sh
npm i -D @yinm/exec-info
```

## Usage

in JavaScript file

```js
const execInfo = require("@yinm/exec-info");

execInfo(`
__dirname
path.join("")
`);
```

in console

```sh
cd ~/misc
node example.js
```

result

```
// カレントディレクトリ: /Users/username/misc
// 実行コマンド: node example.js

__dirname
// =>  /Users/yinm/src/github.com/yinm/exec-info

path.join("")
// =>  .
```

## License
MIT