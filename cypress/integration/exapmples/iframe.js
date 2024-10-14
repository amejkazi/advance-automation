/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'Cypress-iframe'


 
describe('My Second Test Suite', function()
{
 
it('My FirstTest case',function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.frameLoaded("#courses-iframe")
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    cy.iframe().find(".pricing-title").should('have.length',0)



})
})
