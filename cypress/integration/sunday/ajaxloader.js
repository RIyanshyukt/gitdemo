///<reference types='cypress'/>
describe('hello ajax', () => {
    it('waitfor the text',()=>{
        
        cy.visit('http://webdriveruniversity.com/Ajax-Loader/index.html')
       //cy.intercept('http://webdriverunivrsity.com/Ajax-Loader/index.html/*').as('index.html')
       cy.wait(10000)
        cy.url().should('have.text','ajaxloader')
       
       //cy.get('#button1').should('contain.value','CLICK ME!')
    })
})
