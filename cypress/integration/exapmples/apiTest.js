/// <reference types="Cypress" />

describe("api testing", function(){

    it("checking api calls", function(){
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',
        {

            "name":"Learn Appium Automation with Java",
            "isbn":"bcd",
            "aisle":"227",
            "author":"John foe"
            }).then(function(responce){
                expect(responce.body).to.have.property('Msg',"Book Already Exists")
                expect(responce.status).to.eq(200)
            })
            
    })

    })
