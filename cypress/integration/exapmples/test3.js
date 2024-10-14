/// <reference types="Cypress" />
describe('shopping the item',function(){
    it('adding items into the cart', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);
        cy.get('.products').as('pl')
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('.product:visible').should('have.length',4)
        cy.get('@pl').find('.product').eq(0).contains("ADD TO CART").click()
cy.get('@pl').find('.product').each((el,index,list)=>{
 const veggy=  el.text()
 if(veggy.includes('Cashews - 1 Kg'))!!(veggy.includes('Carrot - 1 Kg'))
 {
    cy.wrap(el).find("button").click()
}
// else if(veggy.includes('Carrot - 1 Kg'))
// {
    // cy.wrap(el).find("button").click()
// }

})
cy.get('.brand').should('have.text','GREENKART')
cy.get('.brand').then(function(logoelement){
    const logo=logoelement.text()
    cy.log(logo)
})
cy.get('.cart-icon > img').click()
cy.contains("PROCEED TO CHECKOUT").click()
cy.contains("Place Order").click()

    })

})