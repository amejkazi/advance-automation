/// <reference types="Cypress" />

describe('dashborad page', function(){
    it('log in to the page',function(){
        cy.visit("https://www.flipkart.com/")
        cy.get("a[title='Login'] span")
        cy.log(cy.title());
    

    })
})