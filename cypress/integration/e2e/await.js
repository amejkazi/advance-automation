///<reference types ="Cypress"/>
const promise=new promise({resolve,reject}=>{
    setTimeout(() => {
        let error=false;
        if(!error)
            {
        resolve({name:'john',age:20})
            }
            else
            {
                reject('error:something went wrong')
            }
    }, 2000);
});
async function getPromise(){
    const responce=await promise;
    console.log(responce)
}
getPromise();



const getUser= new promise((resolve, reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error)
            {
                resolve({name;'john',age:30})
            }
            else{
                reject('error:something went wrong')
            }
    },10000);
});
getUser.then((user)=>
    console.log(user)).catch((error)=>
    console.log(error));



const creatuser=new Promise((resolve,reject)=>{
    setTimeout(()={
        resolve(name:'ok',age:15)
    })
})
creatuser.then((user)=>console.log(user))