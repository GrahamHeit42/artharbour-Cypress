// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('LoginSession', (username, password) => {
//     cy.session([username, password], () => {
//       cy.visit('/')
//       cy.get('#pto-email')
//         .should('be.visible').click().type(username)
//       cy.get('#pto-password')
//         .should('be.visible').click().type(password)
//       cy.get('#pto-login-submit-btn').click() // click submit btn
//       cy.url().should('contain', '/graph')
//     })
//   })

Cypress.Commands.add('login', (username, password) => {
    cy.get('.mat-button-wrapper').contains('Login').click()
    cy.get('#email').type('Dhruv@gmail.com')
    cy.get('#password').type('12345678')
    cy.get('.mat-button-wrapper').contains('Sign in').click() // click submit btn
})


Cypress.Commands.add('LoginSession', (username, password) => {
    cy.session([username, password], () => {
        //   cy.visit('http://localhost:4200')
        cy.visit('/')
        // cy.wait(1000);
        cy.get('.mat-button-wrapper').contains('Login').click()
        cy.wait(100);
        cy.get('#email').type(username)

        cy.get('#password').type(password)
        cy.get('.mat-button-wrapper').contains('Sign in').click()
        // cy.get('[src="assets/icons/profile.svg"]').contains('');
        cy.url().should('contain', Cypress.config('baseUrl'))
        cy.get('body').should('contain.html', 'src="assets/icons/profile.svg"')
        // cy.get('body')('[src="assets/icons/profile.svg"]').contains('');
        // if (cy.getLocalStorage("access_token").should("exist")) {
        console.log('LOGIN SUCCESSFULL by Cypress.Commands')
        // }
        // cy.get('mat-button-wrapper > relative > rounded-full').contains()
        // cy.get('[src="assets/icons/profile.svg"]').click()
    })
})


Cypress.Commands.add('getId', (value) => cy.get(`[id="${value}"]`))
// it('spaces in id', () => {
//   cy.visit('index.html')
//   cy.getId('Concept / Preparation')
// })
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
