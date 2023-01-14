import test, { Page, expect } from "@playwright/test";
import { allure } from "allure-playwright";
import data  from "../data_input.json";
import assert from "assert";


async function logout(page: Page ) {
  const now = new Date();
  allure.severity("Critical");
  allure.owner("Takam Jasmin");
  allure.feature("Logout");
  allure.addParameter("Date du lancement", now.toUTCString());
  allure.description("Test de déconnexion au site Z-train");


  await test.step('click on menu button', async () => {
    await page.locator("#style_avatar_wrapper__pEGIQ svg").nth(1).click();
  })
  
  await test.step('click on logout button', async () => {
    await page.getByRole("link", { name: "Se déconnecter" }).click();
  })
  
  if (page.url() != data.url.page_login) {
    assert.fail("La déconnexion à échoué !!");
  }
};

module.exports = logout;
