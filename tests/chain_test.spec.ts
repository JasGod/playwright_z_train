import { test, Page } from "@playwright/test";
const login = require("./login/login.spec");
import { allure } from "allure-playwright";
const panier = require("./panier/panier.spec");
const logout = require("./logout/logout.spec");
const search = require("./search/search.spec");
const register = require("./register/register.spec");
const deleteProd = require("./produit/produit_del.spec");

// console.log(process.argv);

test.describe("test", async () => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    allure.epic("End to End Z-train")
    page = await browser.newPage();
  });

  test.afterAll(async () => {
    await page.close();
  });

/*     test("S'inscrire à Z-TRAIN @register", async () => {
    await register(page);
  }); */

  test("Se connecter à Z-TRAIN", async () => {
    await login(page);
  });

/*   test("Ajouter un produit au panier @bag", async ({}, testInfo) => {
    if (testInfo.retry) await login(page);
    await panier(page);
  }); */

  

/*   test("rechecher un produit @prod", async ({},testInfo) => {
    if (testInfo.retry) await login(page);
    await search(page);
  }); */
  
/*   test("Supprimer un produit du panier @del", async ({},testInfo) => {
    if (testInfo.retry) await login(page);
    await deleteProd(page);
  }); */

/*   test("Se déconnecter de Z-train", async ({},testInfo) => {
    if (testInfo.retry) await login(page);
    await logout(page);
  }); */
});
