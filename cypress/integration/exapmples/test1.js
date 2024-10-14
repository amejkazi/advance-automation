describe('my first test suite', function(){

    it('my first test',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);
        cy.get(".product:visible").should("have.length",4);
        // parent child chaining 
        cy.get(".products").find(".product").should("have.length",4);
        cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click().then(function(){
    console.log("sf");
        })
        cy.get(".products").find(".product").each(($e1,index,$list)=>
        {
    const textveg=$e1.find("h4.product-name").text()
    if(textveg.includes("Cashews"))
    {
        cy.wrap($e1).find("button").click();
    }
    
        })
    
        //const logo=cy.get(".brand");
        //cy.log(logo.text())
        //this wont work we are implimenting non cypress step cost logo so
    
        //aseertion
        cy.get(".brand").should("have.text","GREENKART")
        cy.get(".brand").then(function(logoelement)
        {
            cy.log(logoelement.text());
        })
       
    
       
    
    })
    
    })