import { Injectable, Logger } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";

import {
  DEV_DEPENDENCIES,
  PROD_DEPENDENCIES,
} from "@shared/constants/projectDependenciess";
import { createDirectories } from "@shared/utils/createDirectores";
import { createFileFromTemplate } from "@shared/utils/createFileFromTemplate";
import { executeCommand } from "@shared/utils/executeCommand";

@Injectable()
export class CreateRestAPIService {
  async execute(projectName: string) {
    const projectPath = path.join(process.cwd(), projectName);

    if (projectName && !this.isValidProjectName(projectName)) {
      throw new Error(`Create a project with valid name`);
    }
    Logger.log("Creating Nest project");
    fs.mkdirSync(projectPath);
    createDirectories(
      ["src", "src/modules", "src/shared", "src/config", ".husky"],
      projectPath,
    );

    const templatesPath = path.join(__dirname, "templates");
    const configFilesTemplates = [
      "nest-cli.json.ejs",
      "jest.config.ts.ejs",
      ".prettierrc.ejs",
      ".gitignore.ejs",
      ".eslintrc.js.ejs",
      ".eslintignore.ejs",
      "commitlint.config.js.ejs",
      "tsconfig.json.ejs",
      "tsconfig.build.json.ejs",
      ".husky/commit-msg.ejs",
      ".husky/pre-commit.ejs",
      ".husky/prepare-commit-msg.ejs",
      ".husky/.gitignore.ejs",
    ];
    for (const template of configFilesTemplates) {
      createFileFromTemplate(
        path.join(templatesPath, template),
        path.join(projectPath, template.replace(".ejs", "")),
      );
    }

    createFileFromTemplate(
      path.join(templatesPath, `package.json.ejs`),
      path.join(projectPath, "package.json"),
      { projectName },
    );

    createFileFromTemplate(
      path.join(templatesPath, "src/main.ts.ejs"),
      path.join(projectPath, "src/main.ts"),
      { projectName },
    );

    createFileFromTemplate(
      path.join(templatesPath, "src/app.module.ts.ejs"),
      path.join(projectPath, "src/app.module.ts"),
    );

    const prodDependencies = PROD_DEPENDENCIES.toString().split(",").join(" ");

    const devDependencies = DEV_DEPENDENCIES.toString().split(",").join(" ");

    Logger.log("Installing dependencies");
    await executeCommand(
      `cd ${projectPath} && git init && npm i ${prodDependencies} && npm i -D ${devDependencies}`,
    );
    Logger.log("Dependencies installed");
    Logger.log("Setting up husky permissions");
    await executeCommand(`cd ${projectPath} && chmod +x .husky/commit-msg`);
    await executeCommand(`cd ${projectPath} && chmod +x .husky/pre-commit`);
    await executeCommand(
      `cd ${projectPath} && chmod +x .husky/prepare-commit-msg`,
    );
    Logger.log("Husky permissions set");
  }

  private isValidProjectName(projectPath: string): boolean {
    return !fs.existsSync(projectPath);
  }
}
