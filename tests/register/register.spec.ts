import test, { expect, Page } from "@playwright/test";
import data from "../data_input.json";
import { allure } from "allure-playwright";
import assert from "assert";

async function inscription(page: Page) {
  const now = new Date();
  allure.severity("Blocker");
  allure.owner("Takam Jasmin");
  allure.feature("Register");
  allure.addParameter("Date du lancement", now.toUTCString());
  allure.description("Test d'inscription au site Z-train");

  await test.step("i open Ztrain register page", async () => {
    await page.goto(data.url.page_register);
  });

  await test.step(`I fill in the form with the information ${data.registration.email}, ${data.registration.mot_de_passe}, ${data.registration.Confirmer_mot_de_passe}`, async () => {
      await page.getByPlaceholder("Email").click();
      await page.getByPlaceholder("Email").fill(data.registration.email);
      await expect(page.getByPlaceholder("Email")).toHaveValue(
        data.registration.email
      );
      await page.locator("#password_register").click();
      await page
        .locator("#password_register")
        .fill(data.registration.mot_de_passe);
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
  });

  await test.step(`I clicks validation button`, async () => {
    await page.getByRole("button", { name: "Inscription" }).click();
  });

  

  
  if (page.url() == data.url.page_home) {
    page.pause
  } else {
    assert.fail("L'inscription n'a pas réussi !")
  }

  


}

module.exports = inscription;
