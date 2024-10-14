///<reference types ="Cypress"/>
function getCheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese="@"
            resolve(cheese)

        }2000)
    })

}
function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough=cheese+"*"
            resolve(dough)
        }2000)

    })
}
function bakePizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza=dough+"#"
            resolve(pizaa)

        }2000)
    })
}
getCheese().then((cheese)=>{
    console.log("here is the cheese", cheese)
    return makeDough(cheese)
}).then((dough)=<{
    console.log("here is the the dough",dough)
    return bakePizza(dough)
}).then((pizza)=>{
    console.log("here is the pizza",pizza)
}).catch((data)={
    console.log("error occoured ",data)

})

or
async function orderPizza()
{try
    {
    const cheese=await getCheese();
    console.log("here is the cheese",cheese)
    const dough= await makeDough(cheese);
    console.log("here is the dough", dough)
    const pizza= bakePizza(dough)
    console.log("here is the pizza", pizaa)
}
catch(err){
    console.log("error ocured", err)
}
}
orderPizza()