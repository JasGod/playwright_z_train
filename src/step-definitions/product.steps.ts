import { Given, When, Then } from "@cucumber/cucumber";
import { OurWorld } from "../setup/types";
import { expect } from "@playwright/test";
import data from "../../tests/data_input.json";


When("I select one item", async function (this: OurWorld) {
  await expect(this.page).toHaveURL("https://ztrain-web.vercel.app/home");
  let product_name = data.produit.article;
    await this.page
      .locator(".style_card__gNEqX", {
        has: this.page.locator(`text=${product_name}`),
      })
      .click();
await this.page
  .locator("#style_quantity_wrapper__2QMug")
  .getByRole("textbox")
  .click();
});

When(
  "I added quantity to item and valided",
  async function (this: OurWorld) {
    await this.page
      .locator("#style_quantity_wrapper__2QMug")
      .getByRole("textbox")
      .fill(data.produit.quantité);
    await this.page.getByRole("button", { name: "Ajouter au panier" }).click();
    await this.page.locator("#style_content_cart_wrapper__mqNbf").click();
  }
);
Then("I can see the product in my bag", async function (this: OurWorld) {
await expect(this.page.getByText("Votre panier à été mis à jour")).toHaveText(
  "Votre panier à été mis à jour"
);
await expect(
  this.page.locator('[id="style_card_wrapper__hrc1I"]')
).toContainText(data.produit.nom);
});
