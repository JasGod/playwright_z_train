
import { Page } from "@playwright/test";
import data from "./datas/connection_data.json";


async function login(page: Page) {
  await page.goto("https://ztrain-web.vercel.app/auth/login");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(data.email);
  await page.getByPlaceholder("Mot de passe").click();
  await page.getByPlaceholder("Mot de passe").fill(data.mot_de_passe);
  await page.locator("#btn_login").click();

  page.pause;
}


module.exports = login;
