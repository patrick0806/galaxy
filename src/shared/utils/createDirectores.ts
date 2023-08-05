import * as fs from "fs";
import * as path from "path";

export function createDirectories(
  directories: string[],
  directoryPath: string,
) {
  directories.forEach((dir) => {
    const dirPath = path.join(directoryPath, dir);
    fs.mkdirSync(dirPath, { recursive: true });
  });
}
