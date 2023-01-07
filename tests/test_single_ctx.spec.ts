import { test, Page } from "@playwright/test";
const login = require("./login.spec");
const panier = require("./panier.spec");

test.describe("test", async () => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test("Login to Z-TRAIN", async () => {
    await login(page);
  });

  test("Ajouter Produit au panier", async () => {
    await panier(page);
  });
});
