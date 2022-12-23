import { test, expect } from "@playwright/test";
import data from "./datas/connection_data.json";
import product_data from "./datas/product_data.json";

test.beforeEach(async ({ page }) => {
  await page.goto("https://ztrain-web.vercel.app/auth/login");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(data.email);
  await page.getByPlaceholder("Mot de passe").click();
  await page.getByPlaceholder("Mot de passe").fill(data.mot_de_passe);
  await page.locator("#btn_login").click();

  page.pause;
});
test("supprimer un produit au panier", async ({ page }) => {
  await expect(page).toHaveURL("https://ztrain-web.vercel.app/home");
  await page.locator("#style_content_cart_wrapper__mqNbf").click();
  await page
    .locator("#style_card_wrapper__hrc1I div")
    .filter({ hasText: product_data.produitsupp })
    .locator("svg")
    .nth(2)
    .click();
  await page.locator("#style_card_wrapper__hrc1I").click();
  await expect(page.locator('[id="style_card_wrapper__hrc1I"]')).toContainText(
    product_data.produitsupp
  );
});
