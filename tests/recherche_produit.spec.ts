import { test , expect } from '@playwright/test';
import data from './datas/connection_data.json';
import product_data from "./datas/product_data.json";


test.beforeEach(async ({ page }) => {
  await page.goto("https://ztrain-web.vercel.app/auth/login");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(data.email);
  // await expect(page.getByPlaceholder('Email')).toContain(data.email)
  await page.getByPlaceholder("Mot de passe").click();
  await page.getByPlaceholder("Mot de passe").fill(data.mot_de_passe);
  //await expect(page.getByPlaceholder('Mot de passe')).toContain(data.email)
  await page.locator("#btn_login").click();
  await expect(page).toHaveURL("https://ztrain-web.vercel.app/home");
  page.pause;
});


test("test de recherche produit", async ({ page }) => {
  await expect(page).toHaveURL("https://ztrain-web.vercel.app/home");
  await page.getByPlaceholder("Rechecher un produit").click();
  await page
    .getByPlaceholder("Rechecher un produit")
    .fill(product_data.valid_product);
  await page.getByPlaceholder("Rechecher un produit").press("Enter");
  await expect(page.getByPlaceholder("Rechecher un produit")).toHaveValue(
    product_data.valid_product
  );
  await expect(
    page.locator("[id=style_popular_product_wrapper__z6J0h]")
  ).toContainText(product_data.valid_product);
});
