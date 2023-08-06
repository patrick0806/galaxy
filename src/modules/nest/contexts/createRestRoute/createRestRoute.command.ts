import { Command, CommandRunner, Option } from "nest-commander";

import { CreateRestRouteService } from "./createRestRoute.service";

type CommandOptions = {
  module: string;
  route: string;
};

@Command({
  name: "create-nest-rest-route",
  description: "Create a new nest rest route",
})
export class CreateRestRouteCommand extends CommandRunner {
  constructor(private createRestRouteService: CreateRestRouteService) {
    super();
  }

  @Option({
    flags: "-m, --module <module>",
    description: "Module name",
    required: true,
  })
  getModuleName(moduleName: string): string {
    return moduleName;
  }

  @Option({
    flags: "-r, --route <route>",
    description: "route name",
    required: true,
  })
  getRouteName(routeName: string): string {
    return routeName;
  }

  async run(passedParams: string[], options: CommandOptions) {
    try {
      this.createRestRouteService.execute(options.module, options.route);
    } catch (error) {
      console.error("Error:", error);

      /* try {
        const projectPath = path.join(process.cwd(), projectName);
        fs.rmSync(projectPath, { recursive: true, force: true });
      } catch (error) {
        console.error("Error while cleaning up:", error);
      } */
    }
  }
}
