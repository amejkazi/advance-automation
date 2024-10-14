/// <reference types="Cypress" />

describe("test login",function()
{
    it("check login cred",function(){

        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get("#username").type("student")
        cy.get("#password").type("Password123")
        cy.get('#submit').click()
        cy.get('.post-title').then(function(ele){
            const text=ele.text();
            expect(text).to.eq("Logged In Successfully");
            console.log(text)
        })
            cy.get("li[id='menu-item-43'] a").click();
            cy.get('.post-title').should('have.text',"Hello")
            cy.get("strong").eq(0).should('have.text',"Welcome to Practice Test Automation!")
            cy.get('.post-content > :nth-child(3)').should('contain',"I’m Dmitry Shyshkin")

        

        

    })

})