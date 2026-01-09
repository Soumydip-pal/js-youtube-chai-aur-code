//let score = 33
//let score = "33abc"
let score  = null

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber) // NaN(if let score ="33abc" , undefined)
console.log(valueInNumber) // 0(if let score = null,false)


let isloggedIn =1
let booleanloggedIn = Boolean(isloggedIn)
console.log(booleanloggedIn)// output-true

// 1-> true, 0-> false
// ""->false, "soumya"->true