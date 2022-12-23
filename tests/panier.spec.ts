import { test , expect } from '@playwright/test';
import data from "./datas/connection_data.json";
import product_data from "./datas/product_data.json";


  test.beforeEach(async ({ page }) => {
    await page.goto("https://ztrain-web.vercel.app/auth/login");
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill(data.email);
    await page.getByPlaceholder("Mot de passe").click();
    await page.getByPlaceholder("Mot de passe").fill(data.mot_de_passe);
    await page.locator("#btn_login").click();
    page.pause;
  });
  test("ajouter un produit au panier", async ({ page }) => {
await expect(page).toHaveURL("https://ztrain-web.vercel.app/home");
await page.locator(product_data.article).click();
await page
  .locator("#style_quantity_wrapper__2QMug")
  .getByRole("textbox")
  .click();
await page
  .locator("#style_quantity_wrapper__2QMug")
  .getByRole("textbox")
  .fill(product_data.quantité);
await page.getByRole("button", { name: "Ajouter au panier" }).click();
await page.locator("#style_content_cart_wrapper__mqNbf").click();
await expect(page.getByText("Votre panier à été mis à jour")).toHaveText(
  "Votre panier à été mis à jour"
);
await expect(page.locator('[id="style_card_wrapper__hrc1I"]')).toContainText(
  product_data.nom
);
  });




  /*
const product_list =[{
    name: "",
    locator:"div:nth-child(2) > .style_card_body__QuFGN"
},
{
    name: "",
    locator:"div:nth-child(2) > .style_card_body__QuFGN"
   
},
{
    name: "",
    locator:"div:nth-child(3) > .style_card_body__QuFGN"
},
{
    name: "",
    locator:"div:nth-child(4) > .style_card_body__QuFGN"
}
]

product_list.forEach(product =>{
    test('Ajouter plusieurs produits au panier ${product.}', async ({ page }) => { 
        //point de verification
        await expect(page).toHaveURL('https://ztrain-web.vercel.app/home');
        
        //ajout au panier
        await page.locator(product.locator).first().click();
        await page.getByRole('button', { name: 'Ajouter au panier' }).click();
      
        //verification de la reponse
        await expect(page.getByText('Votre panier à été mis à jour')).toHaveText('Votre panier à été mis à jour');
    })

})
*/