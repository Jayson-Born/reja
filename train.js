//Task B

function countDigits(str) {
       return [...str].filter(char => /\d/.test(char)).length;
   }
   
   
   const result = countDigits("ad2a54y79wet0sfgb9");
   console.log(result); 
// }

// countDigits("ggg4hghgh3hhhgg2hhg3hghghg4hgh3",(err,data)=>{
// if(data){
//     console.log("javob:",data)
// }
// else{
// console.log("javob:",err)
// }});







// Task A


// function harflarSoni(harf, word, callback) {
//     if (typeof harf !== "string" || typeof word !== "string") {
//         callback("Both arguments must be strings", null);
//     } else {
//         const count = [...word].filter(char => char === harf).length;
//         callback(null, count); 
//     }
// }


// harflarSoni("e", "engineer", (err, result) => {
//     if (err) {
//         console.error("Error:", err);
//     } else {
//         console.log("Result:", result); 
//     }
// });







// const list =[
//  "yaxshi talaba bo'ling", //0-20
//  "togri boshliq tanlang va koproq xato qiling", //20-30
//  "uzingizga ishlashni boshlang", //30-40 
//  "siz kuchli bolgan narsalarni qiling", //50-60
//  "endi dam oling, foydasi yuq", //60 
// ];

  
        
       // then/catch

//        console.log("passed here 0");
//        maslahatBering(65)
//        .then ((data) => {
//         console.log("javob:", data);
//        })
//        .catch((err) =>{
//         console.log("javob:", err);
//        });
//        console.log("passed here 1")
       

//        maslahatBering() .then .catch





// function maslahatBering(a, callback){
//     if (typeof a!== "number") callback ("insert a number", nega);
//     else if(a<=20) callback (null, list[o]);
//     else if(a>20 && a<=30) callback (null, list[1]);
//     else if(a>30 && a<=40) callback (null, list[2]);
//     else if(a>40 && a<=50) callback (null, list[3]);
//     else if(a>50 && a<=60) callback (null, list[4]);
//     else{
// //setTimeout(function (){
//         // callback(null, list[5]) ;
//         // } 5000);

//         callback(null, list[5]);
//     }
    
    
//     }


//     maslahatBering(60, (err, result) => {
//         if (err) {
//             console.error("Error:", err);
//         } else {
//             console.log("Result:", result); 
//         }
//     });

//     async function maslahatBering(a){
        
//         if (typeof a!== "number") throw new Error ("insert a number" );
        
//         else if(a<=20) return list[0];
//         else if(a>20 && a<=30) return list[1];
//         else if(a>30 && a<=40) return list[2];
//         else if(a>40 && a<=50) return list[3];
//         else if(a>50 && a<=60) return list[4];
//         else{
//             return  new Promise ((resolve,reject)=>{
//                 setTimeout(()=> {
//                     resolve (list[5]);
//                 })
//             })  
            
//         }}


// async function run(){   
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob=await maslahatBering(31);
//     console.log(javob);
//     javob=await maslahatBering(41);
//     console.log(javob);
// }
// run();