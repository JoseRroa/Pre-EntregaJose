export class Homepage{

    constructor(){
        this.onlineShoppLink = "#onlineshoplink"
    }

    clickToOnlineShopLink (){
        cy.get(this.onlineShoppLink, {timeout : 30000}).click();
    }
}