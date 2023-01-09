import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";
import data  from "../data_input.json";

test('Inscription avec email deja présent', async ({ page }) => {
  await page.goto(data.url.page_register);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(data.registration.email);
  await page.locator('#password_register').click();
  await page.locator('#password_register').fill(data.registration.mot_de_passe);
  await page.getByPlaceholder('Confirmer votre mot de passe').click();
  await page.getByPlaceholder('Confirmer votre mot de passe').fill(data.registration.mot_de_passe);
  await expect(page.getByPlaceholder('Email')).toHaveValue(data.registration.email)
  await expect(page.getByPlaceholder('Confirmer votre mot de passe')).toHaveValue(data.registration.Confirmer_mot_de_passe)
  await page.getByRole('button', { name: 'Inscription' }).click();
  await expect(page.getByText('Cette utilisateur existe déjà')).toHaveText('Cette utilisateur existe déjà')
  await expect(page).toHaveURL(data.url.page_register)

});

test("Inscription avec une adresse mail invalde", async ({ page }) => {
  await page.goto(data.url.page_register);
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(data.registration.email);
  await page.locator("#password_register").click();
  await page.locator("#password_register").fill(data.registration.mot_de_passe);
  await page.getByPlaceholder("Confirmer votre mot de passe").click();
  await page
    .getByPlaceholder("Confirmer votre mot de passe")
    .fill(data.registration.mot_de_passe);
  await page.getByRole("button", { name: "Inscription" }).click();
  await expect(page.getByText("Le format de l'email est invalid")).toHaveText(
    "Le format de l'email est invalid"
  );

  await expect(page).toHaveURL(data.url.page_register);
});

test('inscription avec un mot de passe trop cours', async ({ page }) => {
 await page.goto(data.url.page_register);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('ramexloic@gmail.com');
  await page.locator('#password_register').click();
  await page.locator('#password_register').fill('1234567');
  await page.getByPlaceholder('Confirmer votre mot de passe').click();
  await page.getByPlaceholder('Confirmer votre mot de passe').fill('1234567');
  await page.getByRole('button', { name: 'Inscription' }).click();
  await expect(page.getByText('Le mot de passe doit avoir au moins 8 caractères')).toHaveText('Le mot de passe doit avoir au moins 8 caractères')
  await expect(page).toHaveURL(data.url.page_register)

});

test('inscription avec les mots de passes non identiques', async ({ page }) => {
  await page.goto(data.url.page_register);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('ramexloic@gmail.com');
  await page.locator('#password_register').click();
  await page.locator('#password_register').fill('1234567');
  await page.getByPlaceholder('Confirmer votre mot de passe').click();
  await page.getByPlaceholder('Confirmer votre mot de passe').fill('123456');
  await expect(page.getByText('Les deux mots de passe ne sont pas identiques')).toHaveText('Les deux mots de passe ne sont pas identiques')
  await page.getByRole('button', { name: 'Inscription' }).click();
  await page.getByText('Les deux mots de passe ne sont pas identiques').click();
  await expect(page).toHaveURL(data.url.page_register);

});

test.afterAll(async () => {
  allure.addParameter("email", data.registration.email);
  allure.addParameter("mot de passe", data.registration.mot_de_passe);
});
