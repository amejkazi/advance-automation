/// <reference types="Cypress" />

describe("shoping cart page",function(){
    it("as guest user shopping cart should be empty ",function(){
        cy.visit("https://bookcart.azurewebsites.net/shopping-cart" )
       cy.contains("Your shopping cart is empty.").should('have.text',"Your shopping cart is empty.")
       cy.get(".mt-2 > .mdc-button__label").should('be.visible');
       cy.get("#mat-badge-content-0").should('have.text',0);

    })
})
