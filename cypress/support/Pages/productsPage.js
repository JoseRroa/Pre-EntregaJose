export class ProductPage{

    constructor(){
        this.cartButton = "#add-to-cart-1007"
        this.cartbutton = "#add-to-cart-1005"
        this.closeButton = "#closeModal"
        this.goShoppinggCart = "#goShoppingCart"
    }

    camperaNegra(){
        cy.get(this.cartButton).click();
    };

    mediasNegras(){
        cy.get(this.cartbutton).click();
    };

    closeModal(){
        cy.get(this.closeButton).click();
    };

    clickOnGoShoppingCart(){
        cy.get(this.goShoppinggCart).click();
    };
};