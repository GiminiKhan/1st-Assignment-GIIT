// //Assignment Solution 

// Task 1

// Installetion completed

// // Task 2

// let personName: string = "Eric";
// console.log(`Hello ${personName},would you like to learn some python?`);


// // Task 3
// let personName: string = "Qurratulain Khan";
// //in lowercase
// console.log("lowercase:", personName.toLowerCase());
// //in uppercase
// console.log("uppercase:", personName.toUpperCase());
// //title case
// console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));


// Task 4
// let quote: string = "A person who never made a mistake never tried anything new.";
// let author: string =" Albert Einstein";
// console.log(`${author} once said,"${quote}"`);


// // Task 5
// let famous_person: string = "Albert Einstein";
// let message: string = `${famous_person} once said,"A person who never made a mistake never tried anything new."`;
// console.log(message);


// // Task 6
// let personName: string = "\t\n  John Doe \n\t";
// console.log("Original:", personName);
// console.log("Stripped:", personName.trim ());

// // Task 7 & 8
// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);

// // Task 9
// let favouriteNumber: number = 19;
// console.log (`My favourite number is ${favouriteNumber},`);

// // Task 10
// //author: [Qurratulain]
// //date: [Sunday , February 18, 2024]

// //task 9: printing my favourite number,

// let favouriteNumber: number = 19;

// // reveling my favourite number in a message formate.
// console.log (`My favourite number is ${favouriteNumber},`);

// // Task 11
// let names : string [] = ["Ali","Umer","Abu Bakar","Naira","Ainee"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);

// // Task 12
// let names : string [] = ["Ali","Umer","Abu Bakar","Naira","Ainee"];

// let message : string = "Do you like to saty at home?"
// console.log(names[0] +" "+ message )
// console.log(names[1] +" "+ message )
// console.log(names[2] +" "+ message )
// console.log(names[3] +" "+ message )
// console.log(names[4] +" "+ message )

// //Task 13
// let transpotation : string[] = ["Suzuki motorcycle","Mehran car", "Suzuki Swift"];
// transpotation.map((items) => console.log(`I would like to own a ${items}`));

// // Task 14
// let guestArr : string [] = ["Abu Bakar","Naira","Ainee"];

// guestArr.map((items) => ( console.log((`Dear ${items} , you are invited to the dinner.`))));

// // Task 15
// let guestArr : string[] = ["Abu Bakar","Naira","Ainee"];
// let canNotAttend : string = "Ainee";

// // console.log(canNotAttend + " ", "can not attend the dinner.");

// let newGuest : string = " Shujah"

// guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

// // console.log(guestArr)

// guestArr.map((items) => 
// console.log(`Dear ${items}, You are invited to the dinner.`)
// )

// // Task 16
// let guestArr : string[] = ["Abu Bakar","Naira","Ainee","Tariq"];

// let canNotAttend : string = "Tariq";

// let newGuest : string = "Shujah"

// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)

// // guestArr.map((items) => 
// // console.log(`Dear ${items}, I found a bigger dinner table so I am inviting more people.`)
// // );

// //Part 2

// let guestBeg : string ="Babur"
// guestArr.unshift(guestBeg);
// // console.log(guestArr)

// // Part 3 
// let middleGuest : string = " Hira"
// let middleIndex = guestArr.length/3
// guestArr.splice(middleIndex,0,middleGuest)
// // console.log(guestArr)

// //Part 4
// guestArr.push("Zoki")
// // console.log(guestArr)

// //Part 5
// guestArr.map((items) =>
// console.log (`Dear ${items}, You are invited in the more people list on dinner.`));

// // Task 17

// let guests: string[] = ["Soofia", "Siraj", "Abu Bakar", "Asifa", "Hira", "Zoki"];

// console.log("Due to limited space, only two people can be invited for dinner.");

// while (guests.length > 2) {
// const removedGuest = guests.pop();
// console.log(`Sorry, ${removedGuest}, you are no longer invited to dinner.`);
// }

// let guests: string[] = ["Soofia", "Siraj"];
// guests.forEach((guests) => {
// console.log(`Dear ${guests}, you are still invited to the dinner.`);
// });

// let guests: string[] = ["Soofia", "Siraj"];
// guests.pop();
// guests.pop();
// console.log("Final guest list:", guests);

// //Task 18
// let placesToVisit: string[] = ["Tokyo", "Pakistan", "America", "China", "Japan"];
// console.log("original order:", placesToVisit);

// console.log("Alphabetical order",[...placesToVisit].sort());

// console.log("original order after sorting:", placesToVisit);

// console.log("Reverse alphabetical order:",[...placesToVisit].sort().reverse());

// console.log("original order after reverse sorting:", placesToVisit);


//Task 19

// let invitations : string [] = ["Soofa", "Siraj"];
//  let count_invitations : number = invitations.length

//  console.log(`${count_invitations} people will come to the dinner.`)

//Task 20
// let country: string [] = ["Pakistan","India","NewYork","Japan","China"]
// console.log("List of country:");
// console.log(country);

//Task 21
// let person:{name: string, fname: string ,age: number} = {name:"Qurattulain", fname: "female", age: 43}
// console.log(person)

// //Task 22
// const days : string [] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// // console.log(days{7})
// console.log(days[6])

// Task 23
// let car = "subaru";
// console.log("is car == 'subaru'? predict true")
// console.log(car == 'subaru')

// console.log("is car != 'Honda city'? predict true")
// console.log(car != 'Honda city')

// console.log("is car == 'subaru'? predict false")
// console.log(car == 'Subaru')

// console.log("is car == 'SUBARU'? predict false")
// console.log(car == 'SUBARU')

// console.log("is car.length == 6? predict true")
// console.log(car.length ==6)

// console.log("is car.length != 10? predict true")
// console.log(car.length != 10)

// console.log("is 10 > 45 ? predict false")
// console.log(10 > 45)

// console.log("is 3 <= 2 ? predict false")
// console.log(3 <= 2)

// console.log("is 72 >= 83 ? predict false")
// console.log(72 >= 83)

// console.log("is car == 'subaru' && car.length == 6? predict true ")
// console.log(car == 'subaru' && car.length == 6)

//Task 24
// let name_1 : string = "Qurratulain"
// let name_2 : string = "Qurratulain Saleem"
// let name_3 : string = "Qurratulain Khan"

// if (name_1 == name_3){
//     console.log("names are equal")
// } else {
//     console.log("names are not equal")
// }
// if (name_1 != name_2){
//     console.log("names are equal")
// }

// if (name_1 != name_3){
//     console.log("names are equal")
// }
// let age_1 : number = 18
// let age_2 : number = 22

// if (age_1== 18){
//     console.log("eligible for vote")
// }

// if (age_1 != 22){
//     console.log("eligible for vote in older category")
// }

// if (age_1 <= age_2){    ///less
//     console.log("younger")
// }

// if (age_2 >= age_1){   ///greater
//     console.log("older")
// }

// if (age_1 == 18 && age_2 == 22){
//     console.log("person is eligible for vote")
// }

// if (age_1 == 18 || age_2 != 22){
//     console.log("person is not eligible for vote")
// }

// let country : string []  = ["Pakistan","India","Japan","China"]
// if (country.includes("Pakistan")){
//     console.log("Pakistan is in country list.")
// }

// if (!country.includes ("America")){
// console.log("America is not include in as array.")
// }


// Task 25
// let alien_color = "green"

// if (alien_color == "green")
// console.log("you earn 5 points.")

// let alien_color : string = "red"
// if (alien_color == "green")
// console.log("no output")

//Task 26
// let alien_color = "green"

// if (alien_color == "green") {
// console.log("players just earned 5 points for shooting the alien.")
// } else {
// console.log("player just earned 10 points.")
// }

// let alien_color = "red"

// if (alien_color == "green") {
// console.log("players just earned 5 points for shooting the alien.")
// } else {
// console.log("player just earned 10 points.")
// }

// Task 27
//  let alien_color: string = "red"
//  if (alien_color == "green") {
//     console.log("you earn 5 points.")
//  } else if (alien_color == "yellow") {
//     console.log("player just earned 10 points.")
//  } else {
//     console.log("you earn 15 points.")
//  }


// Task 28 ...........2,4,13,20,65, older
// let age : number = 100

// if(age < 2){
//     console.log ("you are a baby")
//  } else if (age < 4) {
//     console.log("you are a toddler.")
//  } else if (age < 13) {
//     console.log("you are a kid.")
//  } else if (age < 20) {
//     console.log("you are a teenager.")
//  } else if (age < 65) {
//     console.log("you are an adult.")
//  } else {
//     console.log("you are an older.")
//  }

// Task 29
// let favourite_fruits : string [] = ["Kivi","Orange","Apples","Berry","Peach"]

// if (favourite_fruits.includes("Kivi")) {
//     console.log("Kivi")
// }

// if (favourite_fruits.includes("Orange")) {
//     console.log("Orange")
// }
// if (favourite_fruits.includes("Apples")) {
//     console.log("Apples")
// }
// if (favourite_fruits.includes("berry")) {
//     console.log("you realy like bananas.")
// }
// if (favourite_fruits.includes("Peach")) {
//     console.log("you realy like bananas.")
// }

 // Task 30
//   let users : string [] = ["Admin","Eric","Haseeb","Ali","Fatima"]
//  for (let user of users) {
//     if (user === "Admin") {
//         console.log("Hello Admin, would you like to see a status report?")
//     } else {
//         console.log(`Hello ${user}, Thank you for logging in again.`)
//     }
//  }

 // Task 31

// let users : string [] = ["Admin","Eric","Haseeb","Ali","Fatima"]
// users = []
// if (users.length=== 0) {
//     console.log("we need to find some users!")
// }


//Task 32

// let current_users : string [] = ["admin","Eric","Ali","Hamza","fatima"]
// let new_users : string [] = ["admin","fatima","Aliza","Haseeb","Noor"]

// let current_users_lower : string [] =current_users.map(user => user.toLocaleLowerCase())

// for(let new_user of new_users) {
//     if (current_users_lower.includes (new_user.toLowerCase())) {
//     console.log(`Sorry ${new_user}, that name is taken.`)
//     } else {
//         console.log(`Yes ${new_user}, is still in available list.`)
//     }

// }

// Task 33
// let numbers : number [] =[1,2,3,4,5,6,7,8,9]

// for (let number of numbers) {

// if (number ===1) {
// console.log(`${number}st`)
// } else if (number === 2) {
// console.log(`${number}nd`)
// } else if (number === 3) {
// console.log(`${number}rd`)
//  } else {
//     console.log (`${number}th`) //4th, 5th , 6th , 7th , 8th , 9th
//  }
// }

// Task 34

// let favourite_pizza : string [] = ["pepperconi", "chicken", "fajita"]

// // for(let pizza of favourite_pizza) {
// //     console.log(pizza)
// // }
// // console.log("\n")
// for (let pizza of favourite_pizza) {
//     console.log(`I really ${pizza} pizza!`)
// }

// console.log ("\nI really love pizza!")


// Task 35

// let animals : string [] = ["cat","lion","dog",]
// for (let animal of animals) {
//     console.log(animals)
// }
// console.log ("\n")

// for (let animal of animals) {
//     console.log(` A ${animal} has a long tail`)
// }
//  console.log("\n All of these are good pets but i love cats more.")


 // Task 36
// function makeShirt(size : string, text: string): void {
//     console.log(`you order a ${size} shirt that says ${text}`)
// }

// makeShirt(`large`,'"i love typescript"')
// makeShirt(`medium`,'"i need a large shirt"')

// Task 37

// function makeShirt(size: string =`large`, text: string = ' I love typescript'): void {
// console.log(`you have ordered a ${size}, shirt that says ${text}`)
// }
// // makeShirt();
// // makeShirt(`medium`)
// //different message
// makeShirt(`small`,'I need a large shirt to wear')

// Task 38

// function describe_city(city: string, country: string = 'Pakistan'): void {
//     console.log(`${city} is in ${country}`)
// }

// describe_city('Karachi') // default message
// describe_city('France', 'Europe')
// describe_city('Lahore',  'Punjab')


// // Task 39
// function cityCountry(city: string, country: string): string {
//     return `${city}, ${country}`
// }

// let c1 = cityCountry('Lahore' , 'Pakistan')
// let c2 = cityCountry('Tokyo' , 'Japan')
// let c3 = cityCountry('Paris', 'France')

// console.log(c1)
// console.log(c2)
// console.log(c3)


// Task 40
// function makeAlbum (artist: string, title: string): {artist: string; title: string} {
//     const dictionaries = {
//         artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//         title: title.charAt(0).toUpperCase() + title.slice(1)
//     };
//     return dictionaries;
// }
//     let album = makeAlbum("Ali", "Light")
//     console.log(album) 

//     album = makeAlbum("Bilal", "Red Wave")
//     console.log(album) 

//     album = makeAlbum("Hamza", "Sea Breeze")
//     console.log(album) 

//Task 41

// function show_magicians(magicians: string[]): void {

//     for (const magician of magicians) {
//         console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//     }
// }
// // const magician: string[] = ["fawad", "hameed","yasir"]
// // show_magicians(magician)

// Task 42

// function make_great(magicians: string[]): void {
// for (let i = 0; i < magicians.length; i++) {        // i stands for index string              
//     magicians[i] = magicians [i]     +   ` the great`
// }                         
// }

// const magician2: string[] = ["fawad", "hameed","yasir"];
// make_great(magician2)
// show_magicians(magician2)




// Task 43

// function make_great2(magicians: string[]): string[] {
//     const greatMagicians: string[] = [];
//     for (let i = 0; i < magicians.length; i++) {
//         greatMagicians.push(magicians[i] +  ` the Great`);
//     }
//     return greatMagicians;
// }

// const magicians3: string[] = ["fawad", "hameed","yasir"];
// const greatMagicians2: string[] = make_great2(magicians3);
// show_magicians(magicians3);
// show_magicians(greatMagicians2);

// Task 44

// function sandwich(...items: string[]): void {
// console.log("sandwich order:")

// for (let i = 0; i < items.length; i++) {  
//     console.log(`- ${items[i]}`)
// }
// }

// console.log("Enjoy your sandwich Gimini")

// sandwich('capsicum', 'tomoato', 'chicken')
// sandwich('beaf', 'cheese', 'onion')
// sandwich('garlic', 'mayo', 'chicken')

// Task 45

// type car ={
//     manufacture: string
//     model: string
//     [key: string]: any;
// }

// function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
//     return{
//         manufacture,
//         model,
//         ...optional
//     }
// }

// const mycar: car =createCar("Toyota", "Corolla", { color: "Sliver", year: "2024"})
// console.log(mycar)
















































