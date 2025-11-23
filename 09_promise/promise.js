const promiseOne= new Promise(function(resolve, reject){
    // Do any async task
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log('Async Task is Completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log(`Promise Consumed`);
    
})




new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Async Task 2`);
        resolve()
    }, 1000)
}).then(function(){
    console.log(`Async 2 Resolved`);
    
})



const promiseThree= new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({username: "Salty", email: "salty@gmail.com"})
    } , 1000)
})

promiseThree.then(function(user){
    console.log(user);  
})




const promiseFour= new Promise(function(resolve, reject){
    setTimeout(function() {
        let error= false
        if (!error){
            resolve({username: "Salty", password: "Salty789 "})
        }else{
            reject(`ERROR. Something went wrong`)
        }
    })
}, 1000)

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log(`The Promise is Finally Resolved or Rejected`))



const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function() {
        let error= true
        if (!error){
            resolve({username: "Javascript", password: "Salty789 "})
        }else{
            reject(`ERROR. JS went wrong`)
        }
    })
}, 1000)

async function consumePromiseFive(){
    try{
        const response= await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);
        
    }
    
}

consumePromiseFive()