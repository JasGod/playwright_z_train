import { Page, expect } from "@playwright/test";
import { allure } from "allure-playwright";


async function logout(page: Page ) {
  const now = new Date();
  allure.severity("Critical");
  allure.owner("Takam Jasmin");
  allure.feature("Logout");
  allure.addParameter("Date du lancement", now.toUTCString());
  allure.description("Test de déconnexion au site Z-train");
  await page.locator("#style_avatar_wrapper__pEGIQ svg").nth(1).click();
  await page.getByRole("link", { name: "Se déconnecter" }).click();
  await expect(page, "test failed").toHaveURL("https://ztrain-web.vercel.app/auth/login");
  await page.locator("#style_avatar_wrapper__pEGIQ svg").nth(1).click();
  await page.getByRole("link", { name: "Se déconnecter" }).click();
  await expect(page, "test failed").toHaveURL("https://ztrain-web.vercel.app/auth/login");
};

module.exports = logout;
