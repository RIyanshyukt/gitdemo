describe("checking go forward and backword",()=>{
    it('ghjk',()=>{

        cy.visit("Https://google.com")
        cy.get('.gLFyf').type('hello')
        cy.wait(200)
        cy.get(':nth-child(4) > .eIPGRd > .pcTkSc > .wM6W7d > span').click()
        cy.go('back')
        cy.get('.gLFyf').type('sreenivas')
    })
})