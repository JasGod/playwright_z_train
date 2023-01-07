import { test, expect } from "@playwright/test";
import data from "./datas/connection_data.json";
import { allure } from "allure-playwright";

test.beforeEach(async ({ page }) => {
  await page.goto("https://ztrain-web.vercel.app/auth/login");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(data.email);
  // await expect(page.getByPlaceholder('Email')).toContain(data.email)
  await page.getByPlaceholder("Mot de passe").click();
  await page.getByPlaceholder("Mot de passe").fill(data.mot_de_passe);
  //await expect(page.getByPlaceholder('Mot de passe')).toContain(data.email)
  await page.locator("#btn_login").click();
  // page.pause;
  // await expect(page).toHaveURL("https://ztrain-web.vercel.app/home");
  page.pause;
});


test("test de deconnexion", async ({ page }) => {
  allure.owner("TAKAM JASMIN");
  allure.severity("Blocker")
  await page.locator("#style_avatar_wrapper__pEGIQ svg").nth(1).click();
  await page.getByRole("link", { name: "Se déconnecter" }).click();
  await expect(page, "test failed").toHaveURL("https://ztrain-web.vercel.app/auth/login");
});
