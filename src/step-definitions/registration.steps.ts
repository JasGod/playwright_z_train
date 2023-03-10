import { Given, When, Then } from "@cucumber/cucumber";
import { OurWorld } from "../setup/types";
import { expect } from "@playwright/test";



When("I click on register button", async function (this: OurWorld) {
   await this.page.getByRole("link", { name: "S'inscrire" }).click();
   await expect(this.page).toHaveURL(
    "https://ztrain-web.vercel.app/auth/register"
   );
});


When(
  "I fill in the form with the information {string}, {string}, {string}",
  async function (this: OurWorld, string, string2, string3) {

 
  await this.page.getByPlaceholder("Email").fill(string);
  await this.page.locator("#password_register").fill(string2);
  await this.page.getByPlaceholder("Confirmer votre mot de passe").fill(string3);
  
  }
);

When("I clicks validation button", async function (this: OurWorld) {
  await this.page.getByRole("button", { name: "Inscription" }).click();
});

Then(
  "The user is connected {string}",
  async function (this: OurWorld, string) {
    this.page.pause;
    if (this.page.$("Cet utilisateur existe déjà")) {
      await expect(
        this.page.getByText("Cet utilisateur existe déjà")
      ).toHaveText("Cet utilisateur existe déjà");
    } else {
          const locator = await this.page
            .locator("#style_content_logo__pkvMP")
            .getByRole("heading", { name: "Z-Train" });
          await expect(locator).toContainText(string);
    }

  }
);