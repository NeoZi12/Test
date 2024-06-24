 'use strict';

// // ARROW FUNCTION
// let greet = name => "Hello, " + name + "!"

// console.log( greet("Neo") );


// const formatName = (firstName, lastName) => lastName.toUpperCase() + ", " + firstName[0].toUpperCase() + firstName.slice(1);

// console.log( formatName("Neo", "Zino") );


// let func1 = () => console.log('!!!');

// func1();

// // multi-line function
// function filter(arr, callback) {
// 	let res = [];

// 	for (let elem of arr) {
// 		if ( callback(elem) === true ) {
// 			res.push(elem);
// 		}
// 	}
	
// 	return res;
// }

// // callback function
// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	if (elem % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(result)

// let result2 = filter([1, 2, 3, 4, 5], elem => elem % 2 == 0); 
// console.log(result2)


// // callback with arrow function
// let result3 = filter([1, 2, 3, 4, 5], elem => elem > 0 );
// console.log(result3)

// // task 5
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(number => number * 2 );

// console.log(doubledNumbers)


// //task 6
// const ages = [18, 21, 16, 30, 25, 4, 17, 17.9, 19, 120];

// const adults = ages.filter(age => age >= 18 );

// console.log(adults)

// // task 7
// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach(fruit => console.log(fruit));

// // task 8
// const greetings = ['hello', 'world', 'javascript']; // ->['HELLO', 'WORLD', 'JAVASCRIPT']

// let res = greetings.map(elem=> elem.toUpperCase());

// console.log(res);


// NESTED LOOPS

// // task 1
// test(
//     () => 1,
//     () => 2,
//     () => 3
// );

// function test(func1, func2, func3) {
// 	console.log( func1() + func2() + func3() );
// }

// task 4 

// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }

// console.log(test(
//     4,
//     (num)=>num**2,
//     (num)=>num**3
// ));


// let elem1 = document.querySelector('#elem1');
// elem1.textContent = "!"
// console.log(elem1);

// let elem2 = document.querySelector('#elem2');
// elem2.textContent = "!!"
// console.log(elem2);


// let elem3 = document.querySelector('#elem3');
// elem3.textContent = "!!!"
// console.log(elem3);

// let content = document.querySelector('#elemContent')
// content.style.color = 'red';
// content.style.backgroundColor = 'blue';
// content.style.border = '10px solid green';

//DOM ELEMENTS

// // task #1
// let title = document.getElementById('t')

// function changeTitle() {
//     title.style.color = 'blue';
//     title.textContent = 'Blue'
// }


// // task #2

// let elem = document.getElementById('t')

// function hideElement() {
//     elem.style.display = 'none'
// }

// function showElement() {
//     elem.style.display = 'block'
// }

// // task #3

// let elem = document.getElementById('t')

// function changeText() {
//     elem.innerHTML = "Hello my name is Moshe"
//     elem.style.color = 'red'
// }

// // task #4

// let elem = document.getElementById('pisc')

// function changeText() {
//     if(elem.style.display === 'none')
//         elem.style.display = 'block'
//     else
//         elem.style.display = 'none'
 
// }

// // task #5

// let elem = document.getElementById('colorBox')

// let backcolor = elem.style.color;
// let textcolor = elem.style.background;

// function changeColor() {
//     elem.style.color = 'white'
//     elem.style.background = 'red' 
// }

// function resetColor() {
//     elem.style.color = textcolor
//     elem.style.background = backcolor
// }

// STYLES AND CLASSES DOM.

// // task #1

// let elems = document.querySelectorAll(".parag")


// function changeColor(color) {
//     elems.forEach(elem => {
//         elem.className = color
//     });
    
// }

// task #4

// function toggleDiv() {
//     const element = document.getElementById('mainClass');
//     element.classList.toggle('hide');
// }


function toggleClass(elem, idDiv)
{
    const currentBtn = document.querySelector('.btn.active')
    currentBtn.classList.remove('active');
    elem.classList.add('active');
    
    const div = document.getElementById(idDiv)
    const currentDiv = document.querySelector('.context.active')
    currentDiv.classList.remove('active');
    div.classList.add('active');
}



