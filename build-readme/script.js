const path = require("path");
const fs = require("fs/promises");

const getFiles = async () => {
  const srcPath = path.join(process.cwd(), "src/hooks");
  let files = await fs.readdir(srcPath);
  return files;
};

const getContent = files => {
  return files.map(file => path.parse(file).name).join("\n");
};

const writeHookNames = async () => {
  const files = await getFiles();
  const content = getContent(files);
  fs.writeFile("build-readme/hooks-list.txt", content);
};

writeHookNames();
