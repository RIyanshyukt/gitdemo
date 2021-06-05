

describe("this is for the UI tesing",()=>{
    it('should  verify the UI of the website that has given',()=>{
        cy.visit("https://www.saucedemo.com/",{failOnstatusCode:false})
        cy.get('.login_logo').should('be.visible')
       
        //cy.visit("http://the-internet.herokuapp.com/")
    
    })
    beforeEach(()=>{
        {failOnstatusCode:false}
    })
    it("sending user name",()=>{
        //cy.get('user-name').clear
     
       cy.get("#user-name").type("performance_glitch_user")
       //cy.contains("Basic Auth").click
        cy.get('#password').should('be.visible')
        cy.get('#password').clear
        cy.get('#password').type("secret_sauce")
    })
    it('checking login functional',()=>{
        cy.get('[data-test=login-button]').should('be.visible')
        //cy.get('[data-test=login-button]').click
        cy.get('[data-test=login-button]').click()
    })
    it("products shoudl xisible",()=>{
        cy.get('.title').should('be.visible')
    })
})