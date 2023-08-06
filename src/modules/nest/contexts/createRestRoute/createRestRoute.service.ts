import { Injectable, Logger } from "@nestjs/common";
import path from "path";

import { createFileFromTemplate } from "@shared/utils/createFileFromTemplate";

@Injectable()
export class CreateRestRouteService {
  async execute(module: string, routeName: string) {
    Logger.log(
      `Inicinando criação da nova rota ${routeName} no módulo ${module}`,
    );
    const projectPath = path.join(process.cwd());
    const templatesPath = path.join(__dirname, "templates");
    const templates = ["controller.ts.ejs", "service.ts.ejs"];

    for (const template of templates) {
      createFileFromTemplate(
        path.join(templatesPath, template),
        path.join(projectPath, routeName + template.replace(".ejs", "")),
        { routeName },
      );
    }

    Logger.log(`Fim da criação da rota ${routeName}`);
  }
}
