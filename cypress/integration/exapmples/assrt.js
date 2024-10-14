/// <reference types="Cypress" />
describe('assertion chcek',()=>{
    it('differnt type of assertion in cypress',()=>{
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
       Cypress.config ('pageLoadTimeout', 8000)
       Cypress.config('defaultCommandTimeout',8000)
        cy.title().should('eq', 'ProtoCommerce')
        cy.contains("Name",{timeout:10000}).should("be.visible")
        cy.get("input[name='name']").eq(1).type("Amej").should('have.value','Amej')
        cy.get("input[name='email']").type("amejkazi@gmail.com")
        cy.get("[placeholder='Password']").type("amej1234")
        cy.get("[type='checkbox']").check().should('be.checked')
        cy.get("[type='checkbox']+label").should('have.text','Check me out if you Love IceCreams!')
        cy.get("select[class*='form-control']").select('Male').should('have.value','Male')
        cy.get('#inlineRadio2').click();
        cy.get("[type='date']").type("1991-02-27")
        cy.contains("Submit").click();





    })

})