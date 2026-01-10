const name = "soumya"
const repoCount = 50
console.log(name + repoCount + "value") //This format is not use now time

console.log(`Hello my name is ${name} and i am the manager at the ${repoCount}`);

const gameName = new String('hiteshhccom') // this is the another declaration format
console.log(gameName[0]);//h
console.log(gameName.__proto__);//{}->prototype

console.log(gameName.length);//11
console.log(gameName.toUpperCase()); //HITESHHCCOM
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0,3); //hit //start index and end index
console.log(newString);

const anotherString  = gameName.slice(-8,4); //from the reverse will slice
console.log(anotherString); //e

const newStringOne = "  soumya";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%2choudhry";
console.log(url.replace('%2','-')); //%2 will replace with -
console.log(url.includes('sundar')); //false->sundar will not exit in the string

const rename = "soumya-dip-pal";
console.log(rename.split('-'));//['soumya','dip','pal']