
import { SignInPage } from "../support/Pages/signInPage";
import { LoginPage } from "../support/Pages/loginPage";
import { Homepage } from "../support/Pages/homePage";
import { ProductPage } from "../support/Pages/productsPage";
import { ShoppingCartPage } from "../support/Pages/shoppingCartPage";

describe("PreEntrega",()=>
{const signInPage = new SignInPage();
 const loginPage = new LoginPage();
 const homePage = new Homepage();
 const productsPage = new ProductPage();
 const shoppingCartPage = new ShoppingCartPage();
 let the;
    before("parameter",()=>
    { 
        cy.fixture("data.json").then(datos=>{
            the = datos;
        });
    });
    beforeEach("Preconditions ",()=>
    {
        cy.visit("");
        signInPage.signInButton();
        loginPage.writeUser();
        loginPage.writePass();
        loginPage.clickOnLoginButton();
        homePage.clickToOnlineShopLink();
     })

    it("should add products and choice",()=>
    {
        productsPage.camperaNegra();
        productsPage.closeModal();
        productsPage.camperaNegra();
        productsPage.closeModal();
        productsPage.mediasNegras();
        productsPage.closeModal();
        productsPage.clickOnGoShoppingCart();
        shoppingCartPage.validProductCamperaNegra(the.ProductName.product1, the.UnitPrice.CamperaNegra);
        shoppingCartPage.validQuantityCamperaNegra(the.Quantity.quantity2, the.TotalPrice.totalPriceCamperaNegra);
        shoppingCartPage.validProductMediasNegras(the.ProductName.product2, the.TotalPrice.totalPriceMediasNegra);
        shoppingCartPage.validQuantityMediasNegras(the.Quantity.quantity1, the.TotalPrice.totalPriceMediasNegra);
        shoppingCartPage.clickOnShowTotalPrice(the.ButtonShopping);
        shoppingCartPage.verifyTotalexist(the.PriceTotal.textTotal);
        shoppingCartPage.verifyTotal(the.PriceTotal.textTotal, the.PriceTotal.amount);
    })
    
})