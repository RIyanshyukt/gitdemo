
describe('chekcing viewports',()=>{
    before(()=>{
        console.log("running my test")

    })
    beforeEach(()=>{
        cy.visit("www.applydigital.com")
    })
    it('viewport in Macbook',()=>{
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })
    it('viewport in pixels',()=>{
        cy.viewport('samsung-s10')
        cy.screenshot()
        cy.wait(200)
    })
    it('viewport in iphone 11',()=>{
        cy.viewport('iphone-x')
        cy.screenshot()
        cy.wait(200)
    })
})