/// <reference types="Cypress" />
describe("fake api calls",function(){

    it("mock dummy responce",()=>{
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept({
            path:"/posts"
        }).as('posts')
        cy.get("tr td:first-child a[href='/posts']").click();
        cy.wait('@posts').then(inter=>{
            cy.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        })
    })
   
    it('mock responce',()=>{
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept('GET','/posts',{totalposts:5,name:"Amej"}).as('posts')
             cy.log("mock responce")
             cy.get("tr td:first-child a[href='/posts']").click();
             cy.wait('@posts').then(inter=>{
                expect(inter.response.body.name).equal("Amej")
                expect(inter.response.body.totalposts).to.eq(5);
                })


    })

    it.only('mock dynamic responce',()=>{
        cy.visit("https://jsonplaceholder.typicode.com/")
        cy.intercept('GET','/posts',{fixture:'create.json'}).as('posts')
             cy.log("mock responce")
             cy.get("tr td:first-child a[href='/posts']").click()
             cy.wait('@posts').then(inter=>{
                expect(inter.response.body.name).equal("Amej")
                expect(inter.response.body.id).to.eq(27);
                })
    })
  

})
