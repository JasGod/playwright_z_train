
import { Page, expect } from "@playwright/test";
import data from "../data_input.json";
import { allure } from "allure-playwright";
import assert from "assert";


async function login(page: Page) {
  await page.goto(data.url.page_login);
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(data.login.email);
  await page.getByPlaceholder("Mot de passe").click();
  await page.getByPlaceholder("Mot de passe").fill(data.login.mot_de_passe);

  let mail = await page.getByPlaceholder("Email").textContent();
  let pwd = await page.getByPlaceholder("Mot de passe").textContent();

  if (mail == data.login.email && pwd == data.login.mot_de_passe) {
    await page.locator("#btn_login").click();
    const now = new Date();
    allure.severity("Blocker");
    allure.owner("Takam Jasmin");
    allure.feature("Login");
    allure.description("Test de connexion au site Z-train");
    allure.addParameter("Date du lancement", now.toUTCString());
    allure.addParameter("Login", data.login.email);
    allure.addParameter("Password", data.login.mot_de_passe);
    page.pause;
  } else {
     assert.fail("Data don't match !");
  }


}


module.exports = login;
