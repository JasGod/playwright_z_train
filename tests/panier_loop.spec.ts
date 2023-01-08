import { test, expect, Page } from "@playwright/test";
import data from "./data_input.json";
import { allure } from "allure-playwright";

test.beforeAll(async ({ page }) => {
  await page.goto("https://ztrain-web.vercel.app/auth/login");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(data.login.email);
  await page.getByPlaceholder("Mot de passe").click();
  await page.getByPlaceholder("Mot de passe").fill(data.login.mot_de_passe);
  page.pause;
});

data.ManyProduct.forEach((element) => {
  test(`ajouter plusieurs produits au panier ${element.article}`, async ({
    page,
  }) => {
    await expect(page).toHaveURL("https://ztrain-web.vercel.app/home");
    let product_name = element.article;
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
      .fill(element.quantité);
    await page.getByRole("button", { name: "Ajouter au panier" }).click();
    await page.locator("#style_content_cart_wrapper__mqNbf").click();
    await page.waitForTimeout(1000);
    await expect(page.getByText("Votre panier à été mis à jour")).toHaveText(
      "Votre panier à été mis à jour"
    );
    await page.waitForTimeout(2000);
    await expect(
      page.locator('[id="style_card_wrapper__hrc1I"]')
    ).toContainText(element.article);
    await page.locator("#style_header_home__8t_ie").click();
    allure.severity("Majeur");
    allure.owner("Takam Jasmin");
    allure.addParameter("article", data.produit.article);
    allure.addParameter("quantité", data.produit.quantité);
  });
});
