"use strict";
// 문자열 (string)
const a = '';
const b = '';
const c = ``; // 템플릿 리터럴
let myName = 'John';
let message = `Hello, ${myName}`;
myName.toLocaleUpperCase();
// message = 23; // string에 number 할당 불가
// 숫자 타입 (number)
let n = 100;
// n = '100'; // number에 string 할당 불가
// n.toUpperCase() // string 메서드 사용 불가 (넘버관련 메서드만 가능)
let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let average = total / 2;
let infinity = Infinity;
let minusInfinity = -Infinity;
let notANumber = NaN;
// boolean
let isOpen = true;
let isComplete = false;
if (isOpen) {
    console.log('hello, we are open!');
}
if (!isComplete) {
    console.log('job not complete');
}
// && || !
let isAvailable = isOpen && !isComplete;
// null
let user = null;
function logIn(userName) {
    user = userName;
}
function logOut() {
    user = null;
}
logIn('John');
logOut();
// any
let someValue;
// 뭐든 다 가능 (타입스크립트를 쓰는 의미가 사라짐)
someValue.toString();
someValue = false;
someValue.toFixed();
