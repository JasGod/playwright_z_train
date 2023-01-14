import test, { Page, expect } from '@playwright/test';
import data from "../data_input.json";
import { allure } from "allure-playwright";

async function search(page: Page) {
  await test.step('I am connect to Z-train', async () => {
    await expect(page).toHaveURL(
      data.url.page_home
    );
  })

  await test.step(`I search for a product ${data.search.input}`, async () => {
      await page.getByPlaceholder("Rechecher un produit").click();
      await page
        .getByPlaceholder("Rechecher un produit")
        .fill(data.search.input);
      await page.getByPlaceholder("Rechecher un produit").press("Enter");
  })

  await test.step(`I check a data input`, async () => {
  await expect(page.getByPlaceholder("Rechecher un produit")).toHaveValue(
    data.search.input
  );
  })

  await test.step(`I check if the product exist`, async () => {
  await expect(
    page.locator("[id=style_popular_product_wrapper__z6J0h]"),
    "Le produit n'existe pas."
  ).toContainText(data.search.input);
  })
  



  const now = new Date();
  allure.severity("Normal");
  allure.owner("Takam Jasmin");
  allure.feature("Search product");
  allure.addParameter("Date du lancement", now.toUTCString());
  allure.description("Test de recherche d'un produit sur le site Z-train");
};

module.exports = search;
