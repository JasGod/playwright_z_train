  const config = {
    requireModule: ["ts-node/register"],
    require: ["src/**/*.ts"],
    format: [
      "json:allure-results/cucumber-report.json",
      "html:allure-results/report.html",
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