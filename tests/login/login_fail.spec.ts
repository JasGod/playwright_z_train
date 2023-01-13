import { test, expect, Page } from "@playwright/test";
import data from "../data_input.json";
import { allure } from "allure-playwright";

test("Connexion_failed @Connexion_failed", async ({ page }) => {
  //remplissage du formulaire de connexion
  await page.goto("https://ztrain-web.vercel.app/auth/login");
  await page.getByPlaceholder("Email").fill(data.login.email_fail);
  await page.getByPlaceholder("Mot de passe").fill(data.login.pass_fail);
  await page.locator("#btn_login").click();

  //point de verification
  await expect(page.getByPlaceholder("Email")).toHaveValue(
    data.login.email_fail
  );
  await expect(page.getByPlaceholder("Mot de passe")).toHaveValue(
    data.login.pass_fail
  );

  //verification de la response
  await expect(page.getByText(data.login.format_invalid)).toHaveText(
    data.login.format_invalid
  );

  //point de verification
  await expect(page).toHaveURL("https://ztrain-web.vercel.app/auth/login");

    const now = new Date();
    allure.severity("Blocker");
    allure.owner("Takam Jasmin");
    allure.feature("Login");
    allure.description("Test de connexion en echec au site Z-train");
    allure.addParameter("Date du lancement", now.toUTCString());
    allure.addParameter("Login", data.login.email_fail);
    allure.addParameter("Password", data.login.pass_fail);
});
