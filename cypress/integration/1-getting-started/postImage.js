/// <reference types="cypress" />

describe("Post image", () => {
  beforeEach(() => {
    cy.LoginSession('dhruv@gmail.com', '12345678');
    cy.visit(Cypress.config('baseUrl'))
    cy.wait(2000);
  })


  it('Upload image as artist', () => {

    // cy.get('[src="assets/icons/plus.png"]').click()
    // cy.get('button').contains('Artist').click();
    // cy.wait(1000);
    // cy.get('button').contains('Personal').click();
    // cy.wait(1000);
    // cy.get('[placeholder="Title *"]').click({ force: true }).type('blue', { force: true });
    // cy.wait(2000);
    // cy.get('[placeholder="Description *"]').click({ force: true }).type('only for testing', { force: true });
    // cy.wait(1000);
    // cy.get('mat-select').contains('Select Subject *').click();
    // cy.get('.mat-option-text').contains('Comic').click();
    // cy.wait(1000);
    // cy.get('mat-select').contains('Select Medium *').click();
    // cy.get('.mat-option-text').contains('Digital 2D').click();
    // cy.get('[placeholder="Add New Tag..."]').click({ force: true }).type('test', { force: true });
    // cy.wait(1000);
    // cy.get('.mat-checkbox-inner-container').click({ force: true });
    // cy.wait(1000);
    // cy.get('.mat-radio-label-content').contains('Mature ').click();
    // cy.wait(1000);
  })
  it('Upload image as Commissioned', () => {
    cy.get('[src="assets/icons/plus.png"]').click()
    cy.get('button').contains('Artist').click();
    cy.wait(2000);
    cy.get('.mat-button-wrapper').contains('Commissioned').click();
    cy.wait(1000);
    cy.get('[placeholder="Title *"]').click({ force: true }).type('testing for commissioned', { force: true });
    cy.wait(1000);
    cy.get('[placeholder="Description *"]').click({ force: true }).type('for new commissioned', { force: true });
    cy.wait(1000);
    cy.get('[data-placeholder="Commissioned by"]').click({ force: true }).type('sonu rathod', { force: true });
    cy.wait(1000);
    cy.get('mat-select').contains('Select Subject *').click();
    cy.get('.mat-option-text').contains('Fantasy').click();
    cy.wait(1000);
    cy.get('mat-select').contains('Select Medium *').click();
    cy.get('.mat-option-text').contains('Mixed Media').click();
    cy.wait(1000);
    cy.get('[placeholder="Add New Tag..."]').click({ force: true }).type('magic', { force: true });
    cy.get('mat-icon').contains('star_border').click();
    cy.get('mat-icon').contains('star_border').click();
    cy.get('mat-icon').contains('star_border').click();
    cy.get('mat-icon').contains('star_border').click();
    cy.get('mat-icon').contains('star_border').click();
    cy.get('mat-icon').contains('star_border').click();
    cy.get('mat-icon').contains('star_border').click();
    cy.get('mat-icon').contains('star_border').click();
  })
})