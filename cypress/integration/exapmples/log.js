/// <reference types="Cypress" />
describe('login functionality',()=>{
    it("check login succseeful",()=>{
        cy.config('defaultCommandTimeout',8000);
        cy.visit("https://www.google.com/");
        
        //cy.title().should('have.text','Swag Labs')
        cy.get('.gLFyf').type("cypress");
        cy.get('div.wM6W7d span ').each((el,index,list)=>{
           const text= el.text();
           if(text=="cypress automation")
            {
                cy.wrap('el').click();
            }

        })

        // cy.contains('Password').type('secret_sauce');
        // cy.contains("Login").click();


    })

})