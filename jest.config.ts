const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    ".+\\.(t|j)s$": "ts-jest",
  },
  maxWorkers: 1,
  collectCoverageFrom: [
    "<rootDir>/modules/**/contexts/**/*.useCase.(t|j)s",
    "<rootDir>/modules/**/utils/*.(t|j)s",
  ],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
};
