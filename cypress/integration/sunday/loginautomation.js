///<reference types='cypress'/>
describe('automating a login funtions', () => {
    it('login to a page',()=>{
        cy.visit('https://courses.ultimateqa.com/users/sign_in')
        cy.get('.page__heading').should('be.visible')
        cy.wait(400)
        cy.contains('Email').type('2343@gmai.com')
        //cy.get('.form__group','#user\[email\]').clear()
        //cy.get('#user\[email\]').type('kkkjhgasdf@gmail.com  ')
        cy.contains('Email').should('be.visible')
        cy.contains('password').type('43252r5d')
        //cy.get('#user[remember_me]').click()
        cy.contains('Sign in').should('be.visible')
        cy.contains('Sign in').click()
       //cy.get('#recaptcha-verify-button').click()
    })
})
