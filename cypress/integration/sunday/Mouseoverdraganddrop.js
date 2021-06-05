///<reference types='cypress'/>


describe('mouse over', () => {
    it.skip('checking mouse over',()=>{
        cy.visit('http://webdriveruniversity.com/Actions/index.html#')
        cy.contains('Hover Over Me First!').trigger('mouseover')
        //cy.get('[href="#"]').click()
        const dataTransfer = new DataTransfer;
        cy.contains('DRAG ME TO MY TARGET!').trigger('dragstart', { dataTransfer });

        cy.get('#droppable')
            .trigger('drop', { dataTransfer });
    })

    it("checking mouseover for spice jet",()=>{
        cy.visit("https://www.spicejet.com/")
        cy.viewport('macbook-13')
        //cy.wait(300)
        cy.get('#ctl00_HyperLinkLogin').trigger('mouseover')
        cy.contains('SpiceClub Members ').trigger('mouseover')
        cy.contains('Sign up').trigger('mouseover').click()
        cy.wait(300)
        cy.get('#CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_DropDownListTitle').select('MR').should('have.value',"MR")
})


    })
