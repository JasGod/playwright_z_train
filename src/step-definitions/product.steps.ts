import { Given, When, Then } from "@cucumber/cucumber";
import { OurWorld } from "../setup/types";
import { expect } from "@playwright/test";
import product_data from "../../tests/datas/product_data.json";


When("I select one item", async function (this: OurWorld) {
  await expect(this.page).toHaveURL("https://ztrain-web.vercel.app/home");
await this.page.locator(product_data.article).click();
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
      .fill(product_data.quantité);
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
).toContainText(product_data.nom);
});
