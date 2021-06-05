///<reference types='cypress'/>
describe('this is for dropdown', () => {
    it('to select a value from dropdown',()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('h1').should('be.visible')
    })
    it('dropdown',()=>{
        cy.get('.thumbnail').should('be.visible')
        cy.get('#dropdowm-menu-1')
        .select('python').should('have.value','python')
        cy.get('#dropdowm-menu-2')
        .select('testng').should('have.value','testng')
        cy.get('#dropdowm-menu-3')
        .select('javascript').should('have.value','javascript')
          
    })
    it('check boxes',()=>{
        cy.get('h2').should('be.visible')
       // cy.contains('Option1').check()
        cy.get('#checkboxes > :nth-child(1) > input').first().check()
        //cy.get('.checkbox').first().check()
    })
    it('radio buttons',()=>{
        //cy.get('#radio-buttons > [value="orange"]').check()
        cy.get('[value="blue"]').check()
        //cy.get('[value="cabbage"]').check()
        //cy.get('[value="cabbage"]').check()
        cy.get('#radio-buttons-selected-disabled')
        cy.get('#fruit-selects').select('apple').should('contain.value','apple')
        //.invok('[value="orange"]').select('orange')
    })
})
