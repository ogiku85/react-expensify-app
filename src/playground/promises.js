
const additionPromise = new Promise((resolve, reject) =>{
    let a = 2;
    let b = 5;
    let sum = 0;
    sum = a + b;
    let expectedSum = 79;
    setTimeout(() => {
       sum == expectedSum ? resolve(expectedSum) : reject(`${expectedSum} is not equal to ${sum}`) ;
    }, 3000);
   
   });
   
   additionPromise.then((data) =>{
       console.log('data =', data);
   }).catch((error) =>{
       console.log('error =', error);
   });