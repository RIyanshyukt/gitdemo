describe('this is for moderna UI', () => {
    it('this is for responsin',()=>{
        cy.visit('https://www.modernatx.com/')
        //cy.get('.menu-mlid-1024 > [href="/responsibility"]').trigger('mouseover').wait(200)//.should('be.visible')
        cy.get('.menu-mlid-1024 > [href="/responsibility"]').trigger('mouseover')
        cy.wait(200)
        cy.contains('Employees').should('be.hidden').invoke('show')
        //cy.focused().click()
        cy.get('[disabled]').click({force: true})
        cy.contains('Employees').click()
        //cy.get("li[class='expanded active-trail menu-mlid-1024'] li[class='leaf active-trail active menu-mlid-2821']").click()
    })
    
})
