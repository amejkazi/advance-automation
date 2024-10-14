/// <reference types ="Cypress"/>
function createPost({username,password})
    cy.request("www.google.com",{
        method:"post",
        headers:{
            Content_type:'application/json'
            auth:"bagy2877"
        },
        body:JSON.stringify({
           username,
         password
         
        }).
    })then((res)=>res.json).then((data)=>console.log(data))

createPost({username:"john",password:"amej123"}).then


function createPost({username,password}=>{
    cy.request("www.google.com",{
        method:"post",
        headers:{
            Content_type:'application/json',
            auth:'amej123'
        },
        body:JSON.stringify({
            username,
            password

        })
    })
})
createPost({username:'Amej',password:'rahul'}).then((res)=>res.json).then((data)=>console.log(data))