

/// <reference types="cypress" />

import { loginPage } from "../page_object/loginPom";

describe ('Creating board', () => {

    beforeEach ('VisitLoginPage',()=> {
    cy.visit ('/login')
});

    it ('Creating board', () => {
        loginPage.login('vivify@gmail.com', 'Zoetheartist23');

        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards',
        }).as('creatingBoard');
    
        cy.visit('/create');

    })
    });
    

