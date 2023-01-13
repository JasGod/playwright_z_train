import { Page, expect } from '@playwright/test';
import data from "../data_input.json";
import { allure } from "allure-playwright";

async function search(page: Page) {
  await expect(page, "On est bien sur la page d'accueil").toHaveURL(data.url.page_home);
  await page.getByPlaceholder("Rechecher un produit").click();
  await page
    .getByPlaceholder("Rechecher un produit")
    .fill(data.search.input);
  await page.getByPlaceholder("Rechecher un produit").press("Enter");
  await expect(page.getByPlaceholder("Rechecher un produit")).toHaveValue(
    data.search.input
  );
  await expect(
    page.locator("[id=style_popular_product_wrapper__z6J0h]"), "Le produit n'existe pas."
  ).toContainText(data.search.input);
  const now = new Date();
  allure.severity("Normal");
  allure.owner("Takam Jasmin");
  allure.feature("Search product");
  allure.addParameter("Date du lancement", now.toUTCString());
  allure.description("Test de recherche d'un produit sur le site Z-train");
  allure.addParameter("produit recherché", data.search.input);
};

module.exports = search;
