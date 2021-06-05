

describe("this is where ",()=>{
    it('this is mocha function',()=>{
        cy.visit("https://devexpress.github.io/testcafe/example/")
        cy.wait(5000)

        cy.get('#developer-name').type('Arun')
        cy.get('#traffic-markup-analysis').click()

    })
    it('now send the comment ',()=>{
        cy.get('.slider-container').click()
        cy
    })
})