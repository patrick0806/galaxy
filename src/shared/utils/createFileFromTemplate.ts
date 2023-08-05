import * as ejs from "ejs";
import * as fs from "fs";

export function createFileFromTemplate(
  templatePath: string,
  outputPath: string,
  templateData?: any,
) {
  const templateContent = fs.readFileSync(templatePath, {
    encoding: "utf-8",
  });
  const renderedContent = ejs.render(templateContent, templateData);
  fs.writeFileSync(outputPath, renderedContent);
}
