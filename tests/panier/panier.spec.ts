import { expect, Page } from "@playwright/test";
import data from "../data_input.json";
import { allure } from "allure-playwright";
import { link, linkSync } from "fs";


async function panier(page: Page) {
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
    await expect(page.getByText("Votre panier à été mis à jour"), {
      message: "L'ajout n'a pas aboutit.",
    }).toHaveText("Votre panier à été mis à jour");


    await expect(page.locator('[id="style_card_wrapper__hrc1I"]'), {
      message: "L'ajout au panier à échoué, le produit ne s'y trouve pas.",
    }).toContainText(data.produit.nom);
    await page.locator("#style_header_home__8t_ie").click();
    await page
      .getByRole("heading", { name: "Normal d'être impatient." })
      .click();

    allure.severity("Majeur");
    allure.owner("Takam Jasmin");
    allure.addParameter("article", data.produit.article);
    allure.addParameter("quantité", data.produit.quantité);
}



module.exports = panier;