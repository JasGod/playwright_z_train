import test, { expect, Page } from "@playwright/test";
import data from "../data_input.json";
import { allure } from "allure-playwright";
import { link, linkSync } from "fs";


async function panier(page: Page) {
  await test.step('check home page', async () => {
        await expect(
          page,
        ).toHaveURL(data.url.page_home);
  })

  await test.step(`click on a product ${data.produit.article}`, async () => {
    let product_name = data.produit.article;
    await page
      .locator(".style_card__gNEqX", {
        has: page.locator(`text=${product_name}`),
      })
      .click();
  })


  await test.step(`add quantity ${data.produit.quantité}`, async () => {
    await page
      .locator("#style_quantity_wrapper__2QMug")
      .getByRole("textbox")
      .click();
    await page
      .locator("#style_quantity_wrapper__2QMug")
      .getByRole("textbox")
      .fill(data.produit.quantité);
  });

  await test.step('click on add to bag', async () => {
await page.getByRole("button", { name: "Ajouter au panier" }).click();
  })
  
  await test.step('check a bag', async () => {
    await page.locator("#style_content_cart_wrapper__mqNbf").click();
    await expect(page.getByText("Votre panier à été mis à jour"), {
      message: "L'ajout n'a pas aboutit.",
    }).toHaveText("Votre panier à été mis à jour");

    await expect(page.locator('[id="style_card_wrapper__hrc1I"]'), {
      message: "L'ajout au panier à échoué, le produit ne s'y trouve pas.",
    }).toContainText(data.produit.nom);
  })

  await test.step('back to home page', async () => {
    await page.locator("#style_header_home__8t_ie").click();
    await page
      .getByRole("heading", { name: "Normal d'être impatient." })
      .click();
  })


    const now = new Date();
    allure.severity("Blocker");
    allure.owner("Takam Jasmin");
    allure.feature("Panier");
    allure.description("Test d'ajout de produit au panier sur le site Z-train");
    allure.addParameter("Date du lancement", now.toUTCString());
}



module.exports = panier;