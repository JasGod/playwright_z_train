
import { Page } from "@playwright/test";
import data from "./data_input.json";
import { allure } from "allure-playwright";


async function login(page: Page) {
  await page.goto("https://ztrain-web.vercel.app/auth/login");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(data.login.email);
  await page.getByPlaceholder("Mot de passe").click();
  await page.getByPlaceholder("Mot de passe").fill(data.login.mot_de_passe);
  await page.locator("#btn_login").click();
  allure.severity("Blocker");
  allure.owner("Takam Jasmin");
  allure.description("Test de connexion au site Z-train");
  page.pause;
}


module.exports = login;
