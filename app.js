// // import hassan,* as all from "./main.js";

// // console.log(all.arr);
// // console.log(all.a);
// // console.log(all.saySomething());
// // console.log(hassan());

// // function changeImg() {
// //   document.images[0].src = "/images/images3.png";
// // }

// // function returnImgSrc() {
// //     document.images[0].src = "images/images1.png";

// // }
// let myBtn = document.getElementById("btn");
// myBtn.addEventListener("click", fun);
// myBtn.addEventListener("click", fun1);
// function fun() {
//     document.getElementById("para").innerHTML =
//   `Hello World <br>   Welcome to the  javaTpoint.com`;
// }
// function fun1() {
//     alert("Hello");
// }

// // document.getElementById("btn").addEventListener("click", fun);
// // function fun() {
// //   document.getElementById("para").innerHTML =
// //     "Hello World" + "<br>" + "Welcome to the  javaTpoint.com";
// // }

// fetch("https://dummyjson.com/products/")
//     .then((response) => {
//         return response.json();
//     })
//     .then(data => {
//         let len = Object.keys(data.products).length;
//         for (let i = 0; i < len; i++) {
//             console.log(data.products[i].title);
//         }
//     }).catch(error => { console.error(error) });


// fetch("https://dummyjson.com/products/")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     for (const i in data.products) {
//       console.log(data.products[i].title);
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// async function get() {
//     const response = await fetch("https://dummyjson.com/products/");
//     const data = await response.json();
//     let product = data.products;
//     for (const key in product) {
//             console.log(product[key].title);
//         }
//     }

// get();

// async function get() {
//     const response = await fetch("https://dummyjson.com/products/");
//     const data = await response.json();
//     let pro = data.products;
//     for (const key in pro) {
//         // console.log(pro[key].images);
//         document.write(`<div><img src="${pro[key].images[0]}" alt="" width="100" ></img></div>`);
//         }
// }

// async function get() {
//   const response = await fetch("https://dummyjson.com/products/");
//     const data = await response.json();
//     // console.log(data);
//   let pro = data.products;

//         document.getElementById("sel").innerHTML=
//             `<select>

//     ${pro.map(tit => `<option>${ tit.title }</option >`)}
// </select >`
// };
// const api = "https://dummyjson.com/products";
// async function get() {
//   const response = await fetch(api);
//   const data = await response.json();
//   const pro = data.products;
//   printData(pro);
// }
// function printData(pro) {
//   const header = document.querySelector("#header");
//   const content = document.querySelector("#content");

//     async function getCh(name) {
//       const response = await fetch(`${api}?name=${name}`);
//     }

//   header.innerHTML += `
//     <select class="form-control" onchange="getCh(this.value)">
//         <option value="">Please Select</option>
//         ${pro.map(ele =>`<option >${ele.title}</option>`)}
//     </select>`;
// }


// get();

// const person = {
//     firstName: "Ahmed",
//     lastName: "Hassan",
//     address: {
//         country: 'Egypt',
//         city:"Monofia"
//     },

// }

// function getPerson({firstName,lastName,age="25",address:{city,country}}) {
//     console.log(age);
// }

// getPerson(person);




//const api = "https://dummyjson.com/products";

// ///promis
// let getApi = new Promise((response,reject) => {
//     if (false) {
//         response ("Succfull")
//     } else {
//         reject ("Failed")
//     }
// })
// getApi.then((res) => {
//     console.log(res);
// }).catch((rej) => {
//     console.log(rej)
// })

//fetch

// function getApi() {
//     fetch(api).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(Error)
//     })
// }

// getApi();

///Async & Await
// async function getApi() {
//     try {
//         let response = await fetch(api);
//         let data = await response.json();
//         console.log(data)
//     } catch(err){
//         console.log(err);
//     }
// }
// getApi();
// const api = "https://dummyjson.com/products";

// let myRquest = new XMLHttpRequest();
// myRquest.open("GET", api)
// myRquest.send();
// try {
//     myRquest.onreadystatechange = function () {
    
//         if (this.readyState == 4 && this.status == 200) {
//             //document.write(myRquest.responseText);
//             document.write(myRquest.response);
//         }
//     }
// } catch(err) {
//         console.log(err);
//     }
   
// //console.log(myRquest.response);

