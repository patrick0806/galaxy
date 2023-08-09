import { Injectable, Logger } from "@nestjs/common";
import * as path from "path";

import { createDirectories } from "@shared/utils/createDirectores";
import { createFileFromTemplate } from "@shared/utils/createFileFromTemplate";
import { lowerCaseFirstLetter } from "@shared/utils/lowerCaseFirstLetter";
import { upperCaseFirstLetter } from "@shared/utils/upperCaseFirstLetter";

@Injectable()
export class CreateRestRouteService {
  async execute(moduleName: string, routeName: string) {
    Logger.log(
      `Inicinando criação da nova rota ${routeName} no módulo ${moduleName}`,
    );
    const routePath = path.join(
      process.cwd(),
      "src",
      "modules",
      moduleName,
      "contexts",
      routeName,
    );
    const routeDirectories = ["dtos", "tests"];
    createDirectories(routeDirectories, routePath);
    const fileName = lowerCaseFirstLetter(routeName);
    const className = upperCaseFirstLetter(routeName);

    // Criar arquivos DTOs
    createFileFromTemplate(
      path.join(__dirname, "templates", "dtos", "request.dto.ts.ejs"),
      path.join(routePath, "dtos", "request.dto.ts"),
      { className },
    );
    createFileFromTemplate(
      path.join(__dirname, "templates", "dtos", "response.dto.ts.ejs"),
      path.join(routePath, "dtos", "response.dto.ts"),
      { className },
    );
    createFileFromTemplate(
      path.join(__dirname, "templates", "dtos", "errors.dto.ts.ejs"),
      path.join(routePath, "dtos", "errors.dto.ts"),
      { className },
    );

    // Criar arquivos de teste
    const testsPath = path.join(routePath, "tests");
    createDirectories(["mocks"], testsPath);
    createFileFromTemplate(
      path.join(__dirname, "templates", "tests", "mocks", "params.mock.ts.ejs"),
      path.join(testsPath, "mocks", "params.mock.ts"),
      { className },
    );
    createFileFromTemplate(
      path.join(
        __dirname,
        "templates",
        "tests",
        "mocks",
        "service.mock.ts.ejs",
      ),
      path.join(testsPath, "mocks", "service.mock.ts"),
      { className },
    );
    createFileFromTemplate(
      path.join(__dirname, "templates", "tests", "controller.spec.ts.ejs"),
      path.join(testsPath, `${fileName}.controller.spec.ts`),
      { className },
    );
    createFileFromTemplate(
      path.join(__dirname, "templates", "tests", "service.spec.ts.ejs"),
      path.join(testsPath, `${fileName}.service.spec.ts`),
      { className },
    );

    // Criar arquivos de controller e service
    createFileFromTemplate(
      path.join(__dirname, "templates", "controller.ts.ejs"),
      path.join(routePath, `${fileName}.controller.ts`),
      { className, fileName },
    );
    createFileFromTemplate(
      path.join(__dirname, "templates", "service.ts.ejs"),
      path.join(routePath, `${fileName}.service.ts`),
      { className },
    );

    Logger.log(`Fim da criação da rota ${routeName}`);
  }
}
