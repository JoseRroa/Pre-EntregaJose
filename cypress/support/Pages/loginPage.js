export class LoginPage{

    constructor(){
        this.userInput = "#user"
        this.passInput = "#pass"
        this.loginButton = "#submitForm"
    };


    writeUser (){
        cy.get(this.userInput).type(Cypress.env().user);
    };

    writePass(){
        cy.get(this.passInput).type(Cypress.env().pass);
    };

    clickOnLoginButton(){
        cy.get(this.loginButton).click();
    };
}