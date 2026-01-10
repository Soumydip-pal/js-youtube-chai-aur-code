const score = 400
console.log(score) //400

const balance = new Number(100)
console.log(balance) //[Number: 100]-> type will be defined with value

console.log(balance.toString())//100
console.log(balance.toString().length)//100
console.log(balance.toFixed(2))//100.00

const othersNumber =123.8966
console.log(othersNumber.toPrecision(3))//23.8->23.9,123.8->124

const hundreds =100000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000


//+++++++++++++++++++ Maths ++++++++++++++++++++//


console.log(Math);
console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));// takes the upper value->5
console.log(Math.floor(4.9));//takes the lower value->4
console.log(Math.min(4,3,6,8));//3
console.log(Math.max(4,3,6,8));//8

console.log(Math.random());//give the random value between 0 & 1->0.6107...
console.log((Math.random()*10) +1);//give the value between 1-9->4.3838....(shifting)..adding +1 means give the value between 1 to 9(avoided 0 case)


const min =10
const max = 20
console.log(Math.random()* (max-min +1) + min);//11.605...
console.log(Math.floor(Math.random()* (max-min +1) + min));//give the value between 10 to 20->14......(max-min)->means valu will give between the range(range find)..and +1 means 0 case avoided..and then adding + min means giving the minimun value