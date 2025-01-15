export class ProductPage{

    constructor(){
        this.cartButton = "#add-to-cart-1007"
        this.cartbutton = "#add-to-cart-1005"
        this.closeButton = "#closeModal"
        this.goShoppinggCart = "#goShoppingCart"
        this.PaginationButton= "button[type='button']"
        
    }

    camperaNegra(productName){
        cy.contains(productName).siblings('div').children(this.cartButton).click(); 
    };

    mediasNegras(productName){
        cy.contains(productName).siblings('div').children(this.cartbutton).click();
    };

    closeModal(){
        cy.get(this.closeButton).click();
    };

    clickOnGoShoppingCart(){
        cy.get(this.goShoppinggCart).click();
    };

    clickOnPages1 (){
        cy.contains(this.PaginationButton, "2").click();
    }
    clickOnPages2 (){
        cy.contains(this.PaginationButton, "1").click();
    }
};