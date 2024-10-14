/// <reference types="Cypress" />
describe('ui functionaliyty',function(){
    it('handling child window', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click()
 cy.origin("https://www.qaclickacademy.com/",()=>{


            //  cy.get("div.col-md-8 a.main-btn").then(newTab=>{
                // const hreftab= newTab.prop('href')
                // cy.visit(hreftab)
                //   cy.get('h1').should('conatin','QA Click Academy')
            //  })
            // cy.origin("https://www.udemy.com/user/testing-minds/",()=>{
                // cy.get('h1').should('have.value','QA Click Academy')
            // })
            // cy.get('h1').should('have.value','QA Click Academy')
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get(".mt-50 h2").should('contain','QAClick Academy');

        })


    })
    it('handling tab another way',function(){

        cy.visit("https://www.qaclickacademy.com/")
     //   cy.get('#opentab').invoke('removeAttr','target').click()
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
    })
})
