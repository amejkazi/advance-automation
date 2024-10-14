/// <reference types="Cypress" />
describe('ui components',function(){
    it('handling alert popup',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        //window alert
        cy.on('window:alert',(str)=> // on is used to fire event window :alert is jquery event
        {
            // mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })

        cy.on('window:confirm',(str)=>{ // confirm event
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })




    })
})