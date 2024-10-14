/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get(".table-display tr td:nth-child(2)").each((el,index,list)=>{
    const text =el.text()
    if(text.includes("REST API Testing with SoapUI"))
    {
        cy.get(".table-display tr td:nth-child(2)").eq(index).next().then(function(price){
            const pr=price.text()
            expect(pr).to.equal("35")
        })
    }

})

})
})
