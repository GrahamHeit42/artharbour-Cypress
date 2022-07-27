/// <reference types='cypress' />

describe('Logout user', () => {
    beforeEach(() => {
        cy.LoginSession('Dhruv@gmail.com', '12345678'); 
        cy.visit(Cypress.config('baseUrl'))
    })

    it('UploadPost Artist', () => {
        




        
        //cy.get('[src="assets/icons/profile.svg"]').click()
        //cy.get('input[name='Logout'])
        //cy.get('Logout').click()
        
        //cy.get('.mat-focus-indicator.mat-menu-item').contains('Logout').click()
        

    })

})
    