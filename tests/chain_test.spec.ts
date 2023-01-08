import { test, Page } from "@playwright/test";
const login = require("./login.spec");
const panier = require("./panier.spec");
const logout = require("./logout.spec");
const search = require("./search.spec");
const register = require("./register.spec");
const deleteProd = require("./produit_del.spec");

test.describe("test", async () => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

/*   test("S'inscrire à Z-TRAIN @reg", async () => {
    await register(page);
  }); */

  test("Se connecter à Z-TRAIN @login", async () => {
    await login(page);
  });

/*   test("Ajouter un produit au panier", async () => {
    await panier(page);
  });

  test("rechecher un produit", async () => {
    await search(page);
  });
  
  test("Supprimer un produit du panier", async () => {
    await deleteProd(page);
  });

  test("Se déconnecter de Z-train", async () => {
    await logout(page);
  }); */

});
