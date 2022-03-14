/// <reference types="cypress" />


class LoginPage {

    get loginHeading () {
        return cy.get ('h1')
    }

    get emailField () {
        return cy.get ('[type=email]')
    }

    get passwordField () {
        return cy.get ('[type=password]')
    }


    get submitBtn () {
        return cy.get ('[type =submit]')
    }
 
    login (email, password) {
        this.emailField.type(email);
        this.passwordField.type(password);
        this.submitBtn.click();
    }
    
    
}
export const loginPage = new LoginPage();