export class ShoppingCartPage{


    constructor(){
        this.productDiv ="#productName"
        this.quantityDiv = "#productAmount"
        this.unitPriceDiv = "#unitPrice"
        this.totalPriceDiv = "#totalPrice"
        this.totalClass = "#price"
    }

    validProductCamperaNegra(productName, unitPrice){
        cy.contains(this.productDiv , productName ).should("exist").siblings(this.unitPriceDiv).should("have.text" , unitPrice);
    };

    validQuantityCamperaNegra(quantity, totalPrice){
        cy.contains(this.quantityDiv, quantity).should("exist").siblings(this.totalPriceDiv).should("have.text", totalPrice)
    };

    validProductMediasNegras(productName, unitPrice){
        cy.contains(this.productDiv , productName).siblings(this.unitPriceDiv).should("have.text", unitPrice);
    };

    validQuantityMediasNegras(quantity, totalPrice){
        cy.contains(this.quantityDiv, quantity).siblings(this.totalPriceDiv).should("have.text", totalPrice)
    };

    clickOnShowTotalPrice(buttonShopping){
        cy.contains("button" , buttonShopping).should("have.text", buttonShopping).click();
    };

    verifyTotalexist(){
        cy.get(".chakra-text.css-vn850v").eq(0).should("exist")
    };

    verifyTotal(priceTotal, amount){
        cy.contains(".chakra-text.css-vn850v", priceTotal).siblings(this.totalClass).should("have.text", amount)
    }

};