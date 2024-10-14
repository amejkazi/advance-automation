// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
    cy.intercept({   // request objecr
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },
 
     {
         statusCode : 200, // response object
         body : [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"    }]
          
     }).as('bookretrievals')
     cy.get("button[class='btn btn-primary']").click()
     cy.wait('@bookretrievals').then(({request,response})=> 
     // cy. wait will give response  and should have 
     // two properties request and responce
     {
         cy.get('tr').should('have.length',response.body.length+1)  //
      
     })
     cy.get('p').should('have.text','Oops only 1 Book available')
 
 
 
     //length of the response array = rows of the table
 
 
 
 
 
 
 
 
 
 
})
 
})