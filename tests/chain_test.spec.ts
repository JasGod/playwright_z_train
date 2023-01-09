import { test, Page } from "@playwright/test";
const login = require("./login/login.spec");
const panier = require("./panier/panier.spec");
const logout = require("./logout/logout.spec");
const search = require("./search/search.spec");
const register = require("./register/register.spec");
const deleteProd = require("./produit/produit_del.spec");

test.describe("test", async () => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

  /*   test("S'inscrire à Z-TRAIN @reg", async () => {
    await register(page);
  }); */

  test("Se connecter à Z-TRAIN @login", async () => {
    await login(page);
  });

  test("Ajouter un produit au panier", async ({}, testInfo) => {
    if (testInfo.retry) await login(page);
    await panier(page);
  });

  /*

  test("rechecher un produit", async ({},testInfo) => {
    if (testInfo.retry) await login(page);
    await search(page);
  });
  
  test("Supprimer un produit du panier", async ({},testInfo) => {
    if (testInfo.retry) await login(page);
    await deleteProd(page);
  });

  test("Se déconnecter de Z-train", async ({},testInfo) => {
    if (testInfo.retry) await login(page);
    await logout(page);
  }); */
});
