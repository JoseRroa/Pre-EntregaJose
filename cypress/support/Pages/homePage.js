export class Homepage{

    constructor(){
        this.onlineShoppLink = "#onlineshoplink"
    }

    clickToOnlineShopLink (){
        cy.get(this.onlineShoppLink, {timeout : 3000}).click();
    }
}