import { Page, expect, test } from "@playwright/test";
import data from "../data_input.json";
import { allure } from "allure-playwright";
import assert from "assert";

async function login(page: Page) {
  const now = new Date();
  allure.severity("Blocker");
  allure.owner("Takam Jasmin");
  allure.feature("Login");
  allure.description("Test de connexion au site Z-train");
  allure.addParameter("Date du lancement", now.toUTCString());


  await test.step("go to login page", async () => {
    await page.goto(data.url.page_login);
  });
  await test.step(`fill the input email ${data.login.email}`, async () => {
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill(data.login.email);
  });
  await test.step(`fill the password input ${data.login.mot_de_passe}`, async () => {
    await page.getByPlaceholder("Mot de passe").click();
    await page.getByPlaceholder("Mot de passe").fill(data.login.mot_de_passe);
  });

  await test.step("check the value in the email input", async () => {
    await expect(page.getByPlaceholder("Email")).toHaveValue(data.login.email);
  });

  await test.step("check the value in the password input", async () => {
    await expect(page.getByPlaceholder("Mot de passe")).toHaveValue(
      data.login.mot_de_passe
    );
  });

  await test.step("click on login Button", async () => {
    await page.locator("#btn_login").click();
  });

  if (page.url() != data.url.page_home) {
    assert.fail("Login à échoué");
  }
  page.pause;
}

module.exports = login;
