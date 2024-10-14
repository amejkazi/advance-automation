/// <reference types="Cypress"/>
function createPost({username,password})
{
    cy.request('www.googlr.com',{
        method:'post',
        body:JSON.stringify({
            username,
            password,
        }),
        headers:{
            'Content-Type':'application/json',
            token:'abc123'
        }
    }).then((res)=>{
        if(!res.ok)
            {
                throw new Error('request failed')
            }
            return res
    })
    .then((res)=>res.json())
   // or
   
    .then((data)=> console.log(data)).catch(error)=>{
        console.log('error')
    }
}
createPost({username:'amej',password:'pass123'}).catch(console.error();)