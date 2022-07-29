/// <reference types="cypress" />

describe("LoginVarification", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  it("Varify valid email id", () => {
    cy.get(".mat-button-wrapper").contains("Login").click();
    cy.get("#email").type("Dhruv@gmail.com");
    cy.get("#password").type("12345678");
    cy.get(".mat-button-wrapper").contains("Sign in").click();
  }),
    // cy.get('.mat-button-wrapper').contains('Login').click()
    // cy.get('.text-md font-medium text-primary-500 hover:underline').click()
    // cy.focused('Forgot password?').click()
    // cy.contains('Forgot password? ').click()
    // cy.wait(1000)
    // cy.get('#email').click().then(() => {
    // })
    // cy.contains('Send reset link').click()

    it("5.exist user can able to reset-password ", () => {
      cy.get(".mat-button-wrapper").contains("Login").click();
      loc_Forget_password_link().click();
      cy.wait(1000);
      cy.get("#email")
        .click()
        .then(() => {
          cy.get("#email").type("Dhruv@gmail.com");
        });
    }),
    it("6. User sing in (not exist user)", () => {
      cy.get(".mat-button-wrapper").contains("Login").click();
      cy.wait(1000);
      cy.contains("Sign up").click();
      cy.wait(1000);
      cy.get("#mat-input-55").type("dhruv@gmail.com");
      cy.get('[data-placeholder="Email Address"]').type("dhru@gmail.com");
      // cy.contains('Next').click()
      //cy.get('[placeholder="Verification Code"]').type('')
      //cy.contains('Send me a new code').click //user will get otp at thair email
      cy.contains("Next").click();
      cy.get('[placeholder="Display Name"]').type("Dhruv");
      cy.get('[placeholder="Social Network Name"]').type("sonu");
    });
});
