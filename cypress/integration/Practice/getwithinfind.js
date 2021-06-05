/// <reference types="Cypress" />
describe("checking on my skills",()=>{
    it('launching a website and checking its functionality',()=>{
        cy.visit("http://automationpractice.com/index.php",{failOnStatusCode:false})
        cy.wait(2000)
        cy.get("#header_logo").should('be.visible')
    })
    it("selectiof a get from the parent",()=>{
        cy.get("#search_block_top").within(()=>{
            cy.get("#search_query_top").type("Mens shoes")
            cy.get('[type="submit"]').click()
        })
    //  it('clicking function',()=>{
       
    //     })
    })
    it("seaching results",()=>{
        cy.get('#left_column').should("be.visible")
        //cy.get('#center_column').within(()=>{
        cy.get("#center_column").should('contain',"No results were found for your search")
        })
        it("checking footer section",()=>{
            cy.get('ul.toggle-footer li').should('have.length',11)
            cy.get('ul.toggle-footer li')
            .find("a[href*='toggle-footer']").should('have.length',0)
        })
    })
//})