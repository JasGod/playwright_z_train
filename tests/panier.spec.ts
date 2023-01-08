import { expect, Page } from "@playwright/test";
import data from "./data_input.json";
import { allure } from "allure-playwright";
import { link, linkSync } from "fs";


async function panier(page: Page) {
  try {
    await expect(page, { message: "Connectez-vous d'abord." }).toHaveURL(
      "https://ztrain-web.vercel.app/home"
    );
    let product_name = data.produit.article;
    await page
      .locator(".style_card__gNEqX", {
        has: page.locator(`text=${product_name}`),
      })
      .click();
    await page
      .locator("#style_quantity_wrapper__2QMug")
      .getByRole("textbox")
      .click();
    await page
      .locator("#style_quantity_wrapper__2QMug")
      .getByRole("textbox")
      .fill(data.produit.quantité);
    await page.getByRole("button", { name: "Ajouter au panier" }).click();
    await page.locator("#style_content_cart_wrapper__mqNbf").click();
    await page.waitForTimeout(1000);
    await expect(page.getByText("Votre panier à été mis à jour"), {
      message: "L'ajout n'a pas aboutit.",
    }).toHaveText("Votre panier à été mis à jour");
    await page.waitForTimeout(2000);

    await expect(page.locator('[id="style_card_wrapper__hrc1I"]'), {
      message: "L'ajout au panier à échoué, le produit ne s'y trouve pas.",
    }).toContainText(data.produit.article);
    await page.locator("#style_header_home__8t_ie").click();

    allure.severity("Majeur");
    allure.owner("Takam Jasmin");
    allure.addParameter("article", data.produit.article);
    allure.addParameter("quantité", data.produit.quantité);
    await page
      .getByRole("heading", { name: "Normal d'être impatient." })
      .click();
  } catch (error) {
        await expect(page, { message: "Le site n'a pas répondu à temps." }).toHaveURL(
          "about:blank"
        );
    allure.addMetadataAttachment({'description': "Le site a mis trop de temps pour répondre."});
  }
}



module.exports = panier;