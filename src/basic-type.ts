// 문자열 (string)

const a: string = '';
const b: string = '';
const c: string = ``; // 템플릿 리터럴

let myName: string = 'John';
let message: string = `Hello, ${myName}`;

myName.toLocaleUpperCase();

// message = 23; // string에 number 할당 불가

// 숫자 타입 (number)

let n: number = 100;

// n = '100'; // number에 string 할당 불가
// n.toUpperCase() // string 메서드 사용 불가 (넘버관련 메서드만 가능)

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let notANumber: number = NaN;

// boolean

let isOpen: boolean = true;
let isComplete: boolean = false;

if (isOpen) {
  console.log('hello, we are open!');
}

if (!isComplete) {
  console.log('job not complete');
}

// && || !
let isAvailable: boolean = isOpen && !isComplete;

// null

let user: string | null = null;

function logIn(userName: string) {
  user = userName;
}

function logOut() {
  user = null;
}

logIn('John');
logOut();

// any

let someValue: any;

// 뭐든 다 가능 (타입스크립트를 쓰는 의미가 사라짐)
someValue.toString();
someValue = false;
someValue.toFixed();
