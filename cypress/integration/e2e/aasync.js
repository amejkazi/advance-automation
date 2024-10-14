///<reference types="Cypress"/>
async function getallPromises(){
    const[movies,actors,directors]=await Promise.all([
        fetch('./movies.json').then((res)=>res.json()),
        fetch('./actors.json').then((res)=>res.json()),
        fetch('./directors.json').then((res)=>res.json()),
 ]),
 console.log(movies,actors,directors)
}
getallPromises()

const promise= async()=> {
    const[movies,actors,directors]=await Promise.all([
        cy.request('./movies.json').then((res)=>res.json()),
        cy.request('.actors.json').then((res)=> res.json()),
        cy.request('.actoers.json').them((res)=>res.json())

    ])
    console.log(movies,actors,directors);

}
promise();