// let array =[45,23,21];
// let a =array.map((Value)=>{
//   console.log(Value)
// })


// let arrayfilter =[22,10,4,5,8,15];

// let array2 =arrayfilter.filter((values)=>{
//     return values > 10;
// })
// console.log(array2)

// let arrayreduce =[1,3,4,5,6];
// let newarrayreduce = arrayreduce.reduce((h1,h2)=>{
//     return h1*h2;
// })
// console.log(newarrayreduce);


// let arrary =[1,2,3,3,15,20]
// setTimeout(()=>{
//     let filterarray =arrary.filter((values)=>{
//         return values>10;
//     })
//     console.log(filterarray)   
// },5000)
// console.log(arrary);

// let promise = new Promise(function(resolve,reject){
//     alert("Wellcome Parsa");
//     resolve(33)
//     reject(87)
// })

// console.log("Wellcome to Promises")
// setTimeout(()=>{
//     console.log("Come in 3 seconds")
// },3000)
// console.log("Hurray")

// console.log(promise);
      
let p = new Promise((resolve, reject)=>{
    console.log("please complete your promise")
    setTimeout(()=>{
        alert("Can you accept me")
        //console.log("Your Promise is fullfilled")
        resolve(true)
    },5000)
})
//console.log(p)

// let p1 = new Promise((resolve,reject)=>{
//     console.log("Are You Coming")
//     setTimeout(()=>{
//         //console.log("Sorry I am not Coming")
//         reject(false)
//     },6000)
// })
// console.log(p1)

// p.then((value)=>{
//     console.log(p)

// })

// p1.catch((Error)=>{
//     console.log("Some Error Occured In P2");
// })

// const youtube ="https://api.github.com/users/akshaymarch7";
// const user = fetch(youtube);
// console.log(user);

// user.then((data)=>{
//     console.log(data)
// })

// let cart =["shoes","bags","shirts"]
//  createOrder(cart)
// .then((oderId)=>{
//     console.log(oderId);
//     return oderId;
// })
// .then((oderId)=>{
// proceedToPayment(oderId);
// })
// .then(()=>{
//     console.log("payment succesfully");
// })
// .catch((err)=>{
//     console.log(err.message);
// })
// .then((orderId)=>{
//     console.log("No matter I am definently print here")
// })


// function createOrder(cart){
//     let pr = new Promise((resolve ,reject)=>{
//         if(!validateCart(cart)){
//             let err = new Error("Cart is not validate");
//             reject(err)
//         }
//         let oderId="12345";
//         if(oderId){
//             setTimeout(()=>{
//                 resolve(oderId);
//             },3000);
//         }
//     });
//     return pr;
// }

// function proceedToPayment(oderId){
//     return new Promise((resolve,reject)=>{
//         resolve("Payment Successfull");x
//     });

// }



// function validateCart(cart){
//     return false;
// }


let p1 = new Promise((resolve, reject)=>{
    // setTimeout(()=>{
    //     resolve("p1 is succesful")
    // },3000);
    setTimeout(()=>{
        reject("p1 is fail")
    },2000)
});

let p2= new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve("p2 is succesful")
    // },5000);
    setTimeout(()=>{
        reject("p2 is fail")
    },6000)
});

let p3 = new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve("p3 is succesful")
    // },4000)
    setTimeout(()=>{
        reject("p1 is fail")
    },2000)
});

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err);

// })

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)

// })

// Promise.race([p1,p2,p3]).then((res)=>[
//     console.log(res)
// ])
// .catch((err)=>{
//     console.error(err)
// })

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
    console.log(err.errors)
})