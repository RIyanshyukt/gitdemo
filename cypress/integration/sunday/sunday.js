/// <reference types="Cypress" />
describe('today many things to practice', () => {


    
    it('to verify the page landing',()=>{
        cy.visit('https://ultimateqa.com/complicated-page')
        cy.get('#Section_of_Buttons').should('be.visible')
    })
    it('check bottons functionality',()=>{
        cy.get('.et_pb_button_0_wrapper > .et_pb_button').click()
    })
    it('twitter',()=>{
        cy.get('.et_pb_social_media_follow_network_6 > .icon').should('be.visible').click()
        cy.go(-1)
    })
    it('sending values in keywords',()=>{
        cy.get('#et_pb_contact_name_0').type('please contact me')
        cy.wait(200)
        cy.get('#email').should('not.be.empty')
        cy.get('#et_pb_contact_email_0').type('hello@123.com')
        cy.wait(100)
        cy.get('#et_pb_contact_message_0').type("hi this is my program to verify my skills")
        cy.wait(100)
        cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input').type('15')
        cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit').click()
        //cy.go(-1)
    })
    it("checking login gunctionality",()=>{
        cy.get('#user_login_60a8d183d674e').type("abcdef@ghijk.com")
        cy.get('#user_pass_60a8d183d674e').type('345634gfd')
        cy.get('.et_pb_login_0 > .et_pb_newsletter_form > form > :nth-child(4) > .et_pb_newsletter_button').click()
        cy.url().should('contain','backoffice')
        cy.go("back")
    })
})

