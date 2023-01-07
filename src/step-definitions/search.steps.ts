import { Given, When, Then } from "@cucumber/cucumber";
import { OurWorld } from "../setup/types";
import { expect } from "@playwright/test";

Given("I am connected to my account {string} and {string}", async function (this: OurWorld,string1, string2) {
  await this.page.goto("https://ztrain-web.vercel.app/auth/login");
  await expect(this.page).toHaveURL("https://ztrain-web.vercel.app/auth/login");
      await this.page.goto("https://ztrain-web.vercel.app/auth/login");
      await this.page.getByPlaceholder("Email").fill(string1);
      await this.page.getByPlaceholder("Mot de passe").fill(string2);
       await this.page.locator("#btn_login").click();
});

When(
  "I do a multiple keyword search for {string}",
  async function (this: OurWorld, string) {
 await expect(this.page).toHaveURL("https://ztrain-web.vercel.app/home");
 await this.page.getByPlaceholder("Rechecher un produit").click();
 await this.page
   .getByPlaceholder("Rechecher un produit")
   .fill(string);
 await this.page.getByPlaceholder("Rechecher un produit").press("Enter");

  }
);

Then(
  "I see a multiple keyword search {string} in result page",
  async function (this: OurWorld, string) {
 await expect(this.page.getByPlaceholder("Rechecher un produit")).toHaveValue(
   string
 );
 await expect(
   this.page.locator("[id=style_popular_product_wrapper__z6J0h]")
 ).toContainText(string);
  }
);

