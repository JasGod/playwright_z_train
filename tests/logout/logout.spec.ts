import { Page, expect } from "@playwright/test";
import { allure } from "allure-playwright";


async function logout(page: Page ) {
  allure.severity("Majeur");
  allure.owner("Takam Jasmin");
  allure.description("Test de déconnexion au site Z-train");
  await page.locator("#style_avatar_wrapper__pEGIQ svg").nth(1).click();
  await page.getByRole("link", { name: "Se déconnecter" }).click();
  await expect(page, "test failed").toHaveURL("https://ztrain-web.vercel.app/auth/login");
  await page.locator("#style_avatar_wrapper__pEGIQ svg").nth(1).click();
  await page.getByRole("link", { name: "Se déconnecter" }).click();
  await expect(page, "test failed").toHaveURL("https://ztrain-web.vercel.app/auth/login");
};

module.exports = logout;
