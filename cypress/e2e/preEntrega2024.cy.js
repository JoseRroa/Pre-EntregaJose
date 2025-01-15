
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
        productsPage.clickOnPages1(the.quantity.quantity2);
        productsPage.camperaNegra(the.productName.product1);
        productsPage.closeModal();
        productsPage.camperaNegra(the.productName.product1);
        productsPage.closeModal();
        productsPage.clickOnPages2(the.quantity.quantity1);
        productsPage.mediasNegras(the.productName.product2);
        productsPage.closeModal();
        productsPage.clickOnGoShoppingCart();
        shoppingCartPage.validProductCamperaNegra(the.productName.product1, the.unitPrice.camperaNegra);
        shoppingCartPage.validQuantityCamperaNegra(the.quantity.quantity2, the.totalPrice.totalPriceCamperaNegra);
        shoppingCartPage.validProductMediasNegras(the.productName.product2, the.unitPrice.mediasNegras);
        shoppingCartPage.validQuantityMediasNegras(the.quantity.quantity1, the.totalPrice.totalPriceMediasNegra);
        shoppingCartPage.clickOnShowTotalPrice(the.buttonShopping);
        shoppingCartPage.verifyTotalexist(the.priceTotal.textTotal);
        shoppingCartPage.verifyTotal(the.priceTotal.textTotal, the.priceTotal.amount);
    })
    
})