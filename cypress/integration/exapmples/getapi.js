/// <reference types="Cypress"/> 
describe('get api',()=>{
    let acessToken="b1ac108b447f38de5d81541426d79c56503e8123727305a450a9baebf059c764"
    it("get api calls",()=>{

        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                'authorization':'Bearer '+acessToken
            }
}).then(res=>{
    cy.log(res)
    cy.log(JSON.stringify(res))
    expect(res.status).to.eq(200)
    expect(res.body.length).equal(10)
    cy.log(res.body[0])
    cy.log(JSON.stringify(res.body[0]))
    expect(res.body[1].name).include("Brijesh Prajapat")
})
    })
    it.only("get api calls",()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users/6965535",
            headers:{
                'authorization':'Bearer '+acessToken
            }
            }).then(res=>{
    cy.log(res)
    cy.log(JSON.stringify(res))
    expect(res.status).to.eq(200)
    expect(res.body.length).equal(0)
    cy.log(res.body[0])
    cy.log(JSON.stringify(res.body[0]))
    expect(res.body.name).include("Aryan")
  })
    })
})

