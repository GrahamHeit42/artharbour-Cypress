/// <reference types="cypress" />

describe("Post image", () => {
  beforeEach(() => {
    cy.LoginSession('Dhruv@gmail.com', '12345678');
    cy.visit(Cypress.config('baseUrl'))
  })


  it('Upload image as arist', () => {

    cy.get('[src="assets/icons/plus.png"]').click()
    //cy.get('.sm:col-span-2').click()
    // cy.get('.mat-focus-indicator w-full mat-flat-button mat-button-base mat-primary').contains('primary').click()
    cy.get('button').contains('Artist').click();
    cy.get('button').contains('Personal').click()
    //cy.get('[name*="Title"]').type('test')
    //cy.get('[name="Title"]').type('blue')
    //cy.get('[placeholder="Title *"]').type('test')
    //cy.get("#mat-input-2").type('Blue')
    //cy.get('.mat-form-field-label-wrapper ng-tns-c36-19').type('Blue')

    cy.get('[placeholder="Title *"]').click({ force: true }).type('blue', { force: true });

    cy.get('[placeholder="Description *"]').click({ force: true }).type('only for testing', { force: true });
    cy.get('mat-select').contains('Select Subject *').click();
    cy.get('mat-option').contains('Anime/Manga').click();
    //cy.get('[placeholder="Description *"]').click({ force: true }).type('for testing');
    // cy.get("#mat-input-5").click({ force: true }).type('for testing');
    //cy.get('Select Medium').contains('traditional paint').click();
    //cy.get('mat-medium').contains('mixed media').click();
    cy.get('mat-select').contains('Select Medium *').click();
    cy.get('mat-option').contains('mixed media').click();


  })


})