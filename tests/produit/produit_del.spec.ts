import test, { expect, Page } from "@playwright/test";
import data from "../data_input.json";
import { allure } from "allure-playwright";


async function deleteProd(page: Page) {
 await test.step(`delete a product ${data.produit.produitsupp}`, async () => {
   await page.locator("#style_content_cart_wrapper__mqNbf").click();
   await page
     .locator("#style_card_wrapper__hrc1I div")
     .filter({ hasText: data.produit.produitsupp })
     .locator("svg")
     .nth(2)
     .click();
 });

 await test.step('click on delete button', async () =>{
    await page.locator("#style_content_cart_wrapper__mqNbf").click();
    await page
      .locator("#style_card_wrapper__hrc1I div")
      .filter({ hasText: data.produit.produitsupp })
      .locator("svg")
      .nth(2)
      .click();
 })

 await test.step('check if product is delete', async () =>{
  await page.locator("#style_card_wrapper__hrc1I").click();
  await expect(page.locator('[id="style_card_wrapper__hrc1I"]')).toContainText(
    data.produit.produitsupp
  );
 })


         const now = new Date();
         allure.severity("Critical");
         allure.owner("Takam Jasmin");
         allure.feature("Delete one product");
         allure.addParameter("Date du lancement", now.toUTCString());
      allure.description("Suppression d'un produit du panier.");
};

module.exports = deleteProd;