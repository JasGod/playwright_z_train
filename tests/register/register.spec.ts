import { expect, Page } from "@playwright/test";
import data from "../data_input.json";
import { allure } from "allure-playwright";

async function inscription(page: Page) {
  await page.goto("https://ztrain-web.vercel.app/auth/register");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(data.registration.email);
  await expect(page.getByPlaceholder("Email")).toHaveValue(data.registration.email);
  await page.locator("#password_register").click();
  await page.locator("#password_register").fill(data.registration.mot_de_passe);
  await expect(page.locator("#password_register")).toHaveValue(
    data.registration.mot_de_passe
  );
  await page.getByPlaceholder("Confirmer votre mot de passe").click();
  await page
    .getByPlaceholder("Confirmer votre mot de passe")
    .fill(data.registration.mot_de_passe);
  await expect(
    page.getByPlaceholder("Confirmer votre mot de passe")
  ).toHaveValue(data.registration.mot_de_passe);
  await page.getByRole("button", { name: "Inscription" }).click();
  await expect(page).toHaveURL("https://ztrain-web.vercel.app/home");

      allure.severity("Blocker");
      allure.owner("Takam Jasmin");

  allure.addParameter("email", data.registration.email);
  allure.addParameter("mot de passe", data.registration.mot_de_passe);
  allure.description("Test d'inscription au site Z-train");
}

module.exports = inscription;
