const path = require("path");

function header() {
  console.log(`// カレントディレクトリ: ${renamedCurrentWorkingDirectory()}`);
  console.log(`// 実行コマンド: ${executedCommand()}`);
  lineSeparator();
}

function body(code) {
  const lines = code.split("\n");
  const lineHavingCode = lines.filter((line) => line !== "");

  lineHavingCode.forEach((line, i) => {
    if (i !== 0) {
      lineSeparator();
    }

    console.log(line);
    console.log("// => ", eval(line));
  });
}

function renamedCurrentWorkingDirectory() {
  return process.cwd().replace(/^\/Users\/(\w+)/, "/Users/username");
}

function executedCommand() {
  const command = process.execPath.split(path.sep).slice(-1).join();
  const executedFile = process.argv[1].replace(
    `${process.cwd()}${path.sep}`,
    ""
  );

  return `${command} ${executedFile}`;
}

function lineSeparator() {
  console.log("");
}

module.exports = (code) => {
  header();
  body(code);
  // TODO: copy the result to clipboard
};
