import { test, expect } from "@playwright/test";
import data from "../data_input.json";
import { allure } from "allure-playwright";

test.beforeEach(async ({ page }) => {
  //connexion
  await page.goto(data.url.page_login);
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(data.login.email);
  await page.getByPlaceholder("Mot de passe").click();
  await page.getByPlaceholder("Mot de passe").fill(data.login.mot_de_passe);
  await page.locator("#btn_login").click();
  await expect(page).toHaveURL(data.url.page_home);
});

test("Recherche produit failed @failed", async ({ page }) => {
  //point de verification
  await expect(page).toHaveURL(data.url.page_home);

  //remplissage du champ recherche
  await page
    .getByPlaceholder("Rechecher un produit")
    .fill(data.search.invalid_product);

  //point de verification
  await expect(page.getByPlaceholder("Rechecher un produit")).toHaveValue(
    data.search.invalid_product
  );

  await page.locator("#style_content_input_wrapper__eNPFq svg").click();

  //verification de la reponse
  await expect(page.getByText(data.search.product_not_found)).toHaveText(
    data.search.product_not_found
  );
           allure_param();
});
function allure_param() {
  const now = new Date();
  allure.severity("Blocker");
  allure.owner("Takam Jasmin");
  allure.feature("Register");
  allure.addParameter("Date du lancement", now.toUTCString());

  allure.addParameter("email", data.registration.email);
  allure.addParameter("mot de passe", data.registration.mot_de_passe);
  allure.description("Test d'inscription au site Z-train");
}

