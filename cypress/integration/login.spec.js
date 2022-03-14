/// <reference types="cypress" />

import {loginPage} from '../page_object/loginPom.js'

describe ('Login test', () => {

    beforeEach ("visit app", () => {
        cy.visit("/login");
    
    });
it.only ('Login with valid credentials', () => {
    loginPage.login ('vivify@gmail.com', 'Zoetheartist23');
    loginPage.submitBtn.click ();
    loginPage.loginHeading.should ('have.text', 'Log in with your existing account');
});

it ('Test login page', () => {
    cy.intercept ({
        method: 'POST',
        url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login',
    }).as('loginViaBackend');

    cy.visit ('/login')
})

});