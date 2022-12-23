import { Given, When, Then } from "@cucumber/cucumber";
import { OurWorld } from "../setup/types";
import { expect } from "@playwright/test";
import assert from "assert";

Given("i'm Ztrain login page", async function (this: OurWorld) {
  await this.page.goto("https://ztrain-web.vercel.app/auth/login");
  await expect(this.page).toHaveURL("https://ztrain-web.vercel.app/auth/login");
});

When(
  "I enter email address {string} and password {string}",
  async function (this: OurWorld, string, string2) {
    // await this.context.tracing.start({ screenshots: true, snapshots: true });
    await this.page.goto("https://ztrain-web.vercel.app/auth/login");
    await this.page.getByPlaceholder("Email").fill(string);
    await this.page.getByPlaceholder("Mot de passe").fill(string2);
    // await this.context.tracing.stop({ path: "./test-results/test-trace.zip" });
  }
);

When("I clicks to the login button", async function (this: OurWorld) {
  await this.page.locator("#btn_login").click();
});

Then(
  "The user is connected with  {string}",
  async function (this: OurWorld, string) {
    const locator = await this.page
      .locator("#style_content_logo__pkvMP")
      .getByRole("heading", { name: "Z-Train" });
    await expect(locator).toContainText(string);
  }
);
