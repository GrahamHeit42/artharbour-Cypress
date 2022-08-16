/// <reference types="cypress" />

describe("Post image", () => {
  beforeEach(() => {
    cy.LoginSession('Dhruv@gmail.com', '12345678');
    cy.visit(Cypress.config('baseUrl'))
  })


  it('Upload image as artist', () => {

    cy.get('[src="assets/icons/plus.png"]').click()
    //cy.get('.sm:col-span-2').click()
    // cy.get('.mat-focus-indicator w-full mat-flat-button mat-button-base mat-primary').contains('primary').click()
    cy.get('button').contains('Artist').click();
    cy.get('button').contains('Personal').click();

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
    cy.get('[placeholder = "Add New Tag..."]').type('blue,black');
    //cy.get('.mat-checkbox-label').click();
    //cy.get('.mat-checkbox-inner-container').dblclick();

    //cy.findByRole(".mat-checkbox-inner-container").check().should("be.checked");
    //cy.get(".accordion__itemContent").invoke("display").equal("block")
    cy.get('.mat-checkbox-label').click({ force: true });
    //cy.get('mat-radio-button').contains('mat-radio-4-input').click({ force: true });
    //cy.get('mat-radio-button').contains('mat-radio-outer-circle').click({ force: true });
    cy.get('.mat-radio-label').contains('Mature').click();
    //cy.get('.mat-button-wrapper').contains(' Upload ').click({ force: true });
    cy.get('.mat-button-wrapper').contains(' Upload ').click({ force: true });
    //cy.get('Drop files here').contains('.ng-star-inserted').click({ force: true });
    cy.get('.drop-area-class').contains('.drop-content-class').click();
    //cy.get('.drop-area-class').contains('ngx-file-drop__file-input').click({ force: true });
  })


})