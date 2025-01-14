export class ShoppingCartPage{


    constructor(){
        this.productDiv ="#productName"
        this.quantityDiv = "#productAmount"
        this.unitPriceDiv = "#unitPrice"
        this.totalPriceDiv = "#totalPrice"
        this.totalClass = "#price"
    }

    validProductCamperaNegra(ProductName, UnitPrice){
        cy.contains(this.productDiv , ProductName ).should("exist").siblings(this.unitPriceDiv).should("have.text" , UnitPrice);
    };

    validQuantityCamperaNegra(Quantity, TotalPrice){
        cy.contains(this.quantityDiv, Quantity).should("exist").siblings(this.totalPriceDiv).should("have.text", TotalPrice)
    };

    validProductMediasNegras(ProductName, UnitPrice){
        cy.contains(this.productDiv , ProductName).siblings(this.unitPriceDiv).should("have.text", UnitPrice);
    };

    validQuantityMediasNegras(Quantity, TotalPrice){
        cy.contains(this.quantityDiv, Quantity).siblings(this.totalPriceDiv).should("have.text", TotalPrice)
    };

    clickOnShowTotalPrice(ButtonShopping){
        cy.contains("button" , ButtonShopping).should("have.text", ButtonShopping).click();
    };

    verifyTotalexist(){
        cy.get(".chakra-text.css-vn850v").eq(0).should("exist")
    };

    verifyTotal(PriceTotal, amount){
        cy.contains(".chakra-text.css-vn850v", PriceTotal).siblings(this.totalClass).should("have.text", amount)
    }

};