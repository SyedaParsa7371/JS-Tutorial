// let p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I am Coming after some seconds ")
//     },4000)
// })

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("I am a second Promise")
//     },5000)

// })

// async function getdata(){
//     console.log("Before Await Declaration ")
//     let val = await p;
//     console.log("Async Wait First Promise to complete")
//     console.log(val) 
//     console.log("after completing the await 1")
//     let val1= await p2;
//     console.log(val1)
//     console.log("after completing the await 2")
// }
// getdata();

// function getData(){
//     p.then((res)=>{
//         console.log(res)
//     });
//     console.log("Wellcome To Get Data")
// }
// getData();

// let API_URL="https://api.github.com/users/akshaymarch7";

// async function handlePromise(){

   
//     // fetch().then((res)=>res.json()).then((res)=>console.log(res))
    
//     try{
//     let data = await fetch(API_URL)
//     let jsonValue = await data.json()
//     console.log(jsonValue)
//     }catch(err){
//         console.log(err)
//     }
// }
// handlePromise();

const cherry = (a,b)=>{
    console.log("Wellcome to new world")
    let add = a+b
    console.log("The addition of two sum "+add)  
}
cherry(4,3);