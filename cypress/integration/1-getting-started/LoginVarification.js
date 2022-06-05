/// <reference types='cypress' />

describe('LoginVarification', () => {
    beforeEach(() => {
        cy.visit('localhost:4200')
        
    })

    it('Varify valid email id', () => {
        cy.get('.mat-button-wrapper').contains('Login').click()
        cy.get('#email').type('Dhruv@gmail.com')
        cy.get('#password').type('12345678')
        cy.get('.mat-button-wrapper').contains('Sign in').click()
    }),
    it('should not allow blank username', () => {
        cy.get('.mat-button-wrapper').contains('Login').click()
        cy.get('#password').type('12345678')
        cy.get('.mat-button-wrapper').contains('Sign in').click()
        cy.get('[aria-atomic="true"]').should('contain.text',' Email address is required ')
        // cy.get('mat-error').should('contain.text',' Email address is required ')
    })

})
