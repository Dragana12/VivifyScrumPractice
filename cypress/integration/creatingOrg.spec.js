/// <reference types="cypress" />
import { loginPage } from "../page_object/loginPom";
describe ('Creating board', () => {

    beforeEach ('VisitLoginPage',()=> {
    cy.visit ('/login')
});

    it ('Creating org', () => {
        loginPage.login('vivify@gmail.com', 'Zoetheartist23');
        cy.get ('.vs-u-text--left > .vs-c-btn');
        cy.get('body');
        cy.get('input');
        cy.get('[name="next_btn"]');
        cy.get('[name="next_btn"]');
    

});
});
