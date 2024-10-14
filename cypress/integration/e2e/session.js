/// <reference types = "Cypress"/>
const login=(name)=>{
    cy.session(name,()=>{
        cy.visit('/login');
        cy.get('#username').type(name)
        cy.get('#password').type("pass123")
        cy.get('#submit').click();
        cy.url().should('contain','/home')
        // remove session if we dont want cache
        cy.clearCookie('authid')
        cy.window().then((win)=>{
            window.localStorage.removeItme('authToken')
        })
        // add session data if want
        cy.setCookie('sessionId','189jhgfoojn')
    })

}
describe('home page test',()=>{
    beforeEach(()=>{
        login(user)
        cy.visit('/home')

    })


})

/// custom command
Cypress.Commnds.add('login',(username,password)=>{
    cy.session([username,password]()=>{

        cy.visit('/login');
        cy.get('#username').type(name)
        cy.get('#password').type(password)
        cy.get('#submit').click();
        cy.url().should('contain','/home')
    },
    { validate()
        {
            cy.request('/whoami').its('status'),should('eq',200)
        }
    
    })
    })

