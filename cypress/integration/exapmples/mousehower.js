/// <reference types="Cypress" />
 //describe('my seconsd test(regression,sanity)',{tags['@somkeTag','@regressionTag'],function())
describe('My Second Test Suite(smoke)', {tags:'@smokeTag' },function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click({force: true})//({force: true})
cy.url().should('include','top')
})
})
