import { test, expect, Page } from "@playwright/test";
import data from "../data_input.json";
import { allure } from "allure-playwright";

test.describe("regroupement pour suppression", async () => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(data.url.page_login);
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill(data.login.email);
    await page.getByPlaceholder("Mot de passe").click();
    await page.getByPlaceholder("Mot de passe").fill(data.login.mot_de_passe);
    await page.locator("#btn_login").click();

    await expect(page).toHaveURL(data.url.page_home);

    await page.locator("#style_content_cart_wrapper__mqNbf").click();
  });

  let clickList: any[] = [];
  var conteur = 0;
  for (let i = 0; i < data.produit.nombresupp; i++) {
    clickList.push(conteur + i);
  }

  clickList.forEach((element) => {
    console.log(clickList);
    test(`supprimer  produit au panier ${element}`, async () => {
      await expect(page.locator('[id="style_card_wrapper__hrc1I"]'), {
        message: "produit inexistant",
      }).toContainText(data.produit.produitsupp);
      await page
        .locator("#style_card_wrapper__hrc1I div")
        .filter({ hasText: data.produit.produitsupp })
        .locator("span")
        .nth(2)
        .click();
      await page.waitForTimeout(2000);
    });
  });

  test.afterAll(async () => {
    allure.addParameter("article", data.produit.produitsupp);
    allure.addParameter(
      "quantité à supprimer",
      data.produit.nombresupp.toString()
    );
  });
});
