/// <reference types="Cypress"/>
const login=(name)=>{
cy.session(username,()=>{
    cy.request({
        method:'post',
        url:'/login',
        body:{name,password:"pass123"},
    }).then((res)=>{
        wi.localStorage.setItem('authToken',res.body.token)

    })
})
}
it('auth login',()=>{
    login('user')
    cy.visit('/transfer')
})