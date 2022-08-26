/// <reference types="cypress" />

describe("Post image", () => {
  beforeEach(() => {
    cy.LoginSession('dhruv@gmail.com', '12345678');
    cy.wait(100);
    cy.visit(Cypress.config('baseUrl'))
    cy.wait(2000);
  })


  it('Upload image as artist', () => {

    cy.get('[src="assets/icons/plus.png"]').click()
    cy.get('button').contains('Artist').click();
    cy.wait(1000);
    cy.get('button').contains('Personal').click();
    cy.wait(1000);
    cy.get('[placeholder="Title *"]').click({ force: true }).type('blue', { force: true });
    cy.wait(2000);
    cy.get('[placeholder="Description *"]').click({ force: true }).type('only for testing', { force: true });
    cy.wait(1000);
    cy.get('mat-select').contains('Select Subject *').click();
    cy.get('.mat-option-text').contains('Comic').click();
    cy.wait(1000);
    cy.get('mat-select').contains('Select Medium *').click();
    cy.get('.mat-option-text').contains('Digital 2D').click();
    cy.get('[placeholder="Add New Tag..."]').click({ force: true }).type('test', { force: true });
    cy.wait(1000);
    cy.get('.mat-checkbox-inner-container').click({ force: true });
    cy.wait(1000);
    cy.get('.mat-radio-label-content').contains('Mature ').click();


  })
  it('Upload image as Commissioned', () => {
    cy.get('[src="assets/icons/plus.png"]').click()
    cy.get('button').contains('Artist').click();
    cy.get('.mat-button-wrapper').contains('Commissioned').click();
    cy.get('[placeholder="Title *"]').click({ force: true }).type('testing for commissioned', { force: true });
    cy.get('[placeholder="Description *"]').click({ force: true }).type('for new commissioned', { force: true });
    cy.get('[data-placeholder="Commissioned by"]').click({ force: true }).type('sonu rathod', { force: true });
    cy.get('mat-select').contains('Select Subject *').click();
    cy.get('.mat-option-text').contains('Fantasy').click();
    cy.get('mat-select').contains('Select Medium *').click();
    cy.get('.mat-option-text').contains('Mixed Media').click();
    cy.get('[placeholder="Add New Tag..."]').click({ force: true }).type('magic', { force: true });

    let starArray = cy.get('#Transaction').get('button')
    cy.get('#Transaction')
      .find('button') // searches for all `li` underneath the yielded element
      .eq(1) // selects the item at the index
      .click();
    cy.get('#Understanding')
      .find('button') // searches for all `li` underneath the yielded element
      .eq(4) // selects the item at the index
      .click();
    cy.get('#Communication')
      .find('button') // searches for all `li` underneath the yielded element
      .eq(2) // selects the item at the index
      .click();

    // .should('contain', 'mytext')
    cy.get(`[id="Concept / Preparation"]`)
      .find('button') // searches for all `li` underneath the yielded element
      .eq(4) // selects the item at the index
      .click();

    cy.get('.mat-button-toggle-label-content').contains('Yes').click();
    cy.get('.mat-radio-label-content').contains('General').click();
    cy.get('.mat-button-wrapper').contains('Upload').click({ force: true });
    //cy.get('button').contains('Submit').click();
  })
  it('Upload image asCommissioner ', () => {
    cy.get('[src="assets/icons/plus.png"]').click()
    cy.get('button').contains('Artist').click();
    cy.get('.mat-button-wrapper').contains('Commissioner').click();
    cy.get('[placeholder="Title *"]').click({ force: true }).type('testing for commissioner', { force: true });
    cy.get('[placeholder="Description *"]').click({ force: true }).type('commissioner testing', { force: true });
    cy.get('[placeholder="Drawn by"]').click({ force: true }).type('commissioner testing', { force: true });
    cy.get('mat-select').contains('Select Subject *').click();
    cy.get('.mat-option-text').contains('Comic').click();
    cy.get('mat-select').contains('Select Medium *').click();
    cy.get('.mat-option-text').contains('Mixed Media').click();
    cy.get('[placeholder="Add New Tag..."]').click({ force: true }).type('abcd', { force: true });


    let starArray = cy.get('#Price').get('button')
    cy.get('#Price')
      .find('button') // searches for all `li` underneath the yielded element
      .eq(1) // selects the item at the index
      .click();
    cy.get('#Speed')
      .find('button') // searches for all `li` underneath the yielded element
      .eq(4) // selects the item at the index
      .click();
    cy.get('#Communication')
      .find('button') // searches for all `li` underneath the yielded element
      .eq(2) // selects the item at the index
      .click();

    // .should('contain', 'mytext')
    cy.get(`[id="Quality"]`)
      .find('button') // searches for all `li` underneath the yielded element
      .eq(4) // selects the item at the index
      .click();



    cy.get('.mat-button-toggle-label-content').contains('Yes').click();
    cy.get('.mat-radio-label-content').contains('General').click();
    cy.get('.mat-button-wrapper').contains('Upload').click({ force: true });





  })

})
