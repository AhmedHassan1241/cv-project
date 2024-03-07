// // // let chosen = 2;

// // // let myFriends = [
// // //   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
// // //   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
// // //   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// // // ];

// // // let [one, two, three] = myFriends;
// // // let {
// // //   title: t1,
// // //   age: a1,
// // //   available: av1,
// // //   skills: [o1, tw1],
// // // } = one;
// // // let {
// // //   title: t2,
// // //   age: a2,
// // //   available: av2,
// // //   skills: [o2, tw2],
// // // } = two;
// // // let {
// // //   title: t3,
// // //   age: a3,
// // //   available: av3,
// // //   skills: [o3, tw3],
// // // } = three;

// // // if (chosen === 1) {
// // //   console.log(
// // // `${t1}
// // // ${a1}
// // // ${av1 === true ? "Available" : "Not Available"}
// // // ${[tw1]}`
// // //   );
// // // }else if (chosen === 2) {
// // //   console.log(
// // //     `${t2}
// // // ${a2}
// // // ${av2 === true ? "Available" : "Not Available"}
// // // ${[tw2]}`
// // //   );
// // // }

// // // // let { title: t, age: a, available: av, skills: [, C] } = one;
// // // // let { title, age, available, skills: [, D] } = two;
// // // // let { title: T, age: A, available: AV, skills: [, L] } = three

// // // Mark the start of the operation

// // const myFirstPromise= new Promise((res, rej) => {
// //   setTimeout(() => {
// //     rej ("I am First Promise ");
// //   }, 5000);
// // });

// // const mySecondPromise = new Promise((res, rej) => {
// //   setTimeout(() => {
// //     rej ("I am Seconde Promise ");
// //   }, 1000);
// // });

// // const myThirdPromise = new Promise((res, rej) => {
// //   setTimeout(() => {
// //     res ("I am Third Promise ");
// //   }, 2000);
// // });


// // Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
// //   (resolvedValue) => console.log(resolvedValue),
// //   (rejectededValue) => console.log(rejectededValue)
// // );

// // String.prototype.zFill = function (width) {
// //   let theResult = this; //this= what i write = string.prototype;

// //   while (theResult.length < width) {
// //      theResult = `0${theResult}`;
// //   }
// //   return theResult;
// // }

// // console.log("123".zFill(6));

// const myObj = {
//   a: 1,
//   b:2,
// }

// Object.defineProperties(myObj, {
//   "c":{enumerable:true,value:3},"d":{value:4,enumerable:true},"e":{value:5,enumerable:true}
// })

// for (const key in myObj) {
//     console.log(key, myObj[key]);
//   }

