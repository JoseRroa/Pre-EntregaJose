export class SignInPage {
    constructor(){
        this.signInSpan = "#registertoggle"
    }

    signInButton(){
        cy.get(this.signInSpan).dblclick();
    };

    
}