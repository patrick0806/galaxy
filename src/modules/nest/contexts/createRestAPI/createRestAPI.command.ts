import fs from "fs";
import { Command, CommandRunner } from "nest-commander";
import * as path from "path";

import { CreateRestAPIService } from "./createRestAPI.service";

@Command({
  name: "create-nest-rest",
  arguments: "<name>",
  description: "Create a nest project",
})
export class CreateRestAPICommand extends CommandRunner {
  constructor(private createRestAPIService: CreateRestAPIService) {
    super();
  }

  async run(passedParams: string[]) {
    const projectName = passedParams[0];
    try {
      this.createRestAPIService.execute(projectName);
    } catch (error) {
      console.error("Error:", error);

      try {
        const projectPath = path.join(process.cwd(), projectName);
        fs.rmSync(projectPath, { recursive: true, force: true });
      } catch (error) {
        console.error("Error while cleaning up:", error);
      }
    }
  }
}
