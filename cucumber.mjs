  const config = {
    requireModule: ["ts-node/register"],
    require: ["src/**/*.ts"],
    format: [
      "json:test-reports/cucumber-report.json",
      "html:test-reports/report.html",
      "summary",
      "progress-bar",
    ],
    formatOptions: { snippetInterface: "async-await" },
    publishQuiet: true,
    tags: "@log01",
    retry: 1,
  };
  config.format.push('./reporter.ts');
  export default config