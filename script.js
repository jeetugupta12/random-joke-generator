const get = document.getElementById("joke");
const btn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit";

const  getJoke =  ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item =>{
         get.textContent= `${item.joke}`
    });
}

btn.addEventListener("click",getJoke);
getJoke();























// const get = document.getElementById("get");
// //const btn=document.getElementById("btn");

//  async function myfun(){
//     let getting=await fetch('https://icanhazdadjoke.com/',{
//     header:{
//         accept: "application/json"
//     }
// })
// let joke = await getting.json();
// console.log(joke)


    
//  }
 
//  //btn.addEventListener("click",myfun);
//  myfun();