let myDate = new Date()
console.log(myDate);  //2026-01-10T06:41:37.064Z...(format is Not Easy to understand)
console.log(myDate.toString()); //Sat Jan 10 2026 06:41:37 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Sat Jan 10 2026..(only give the date)
console.log(myDate.toLocaleString()); //1/10/2026, 6:41:37 AM (give date & time)

console.log(typeof myDate); //object

let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate.toLocaleDateString());//1/23/2023

let myCreateDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreateDate2.toLocaleDateString());//1/23/2023

let myCreateDate3 = new Date(2023, 0, 23)//year month date
console.log(myCreateDate3.toLocaleString());//1/23/2023, 12:00:00 AM

let myCreateDate4 = new Date(2023, 0, 23, 5, 3)//year month date,  hrs min sec 
console.log(myCreateDate4.toLocaleString());//1/23/2023, 5:03:00 AM

let myCreateDate5 = new Date("2023-01-14")//yy-mm-dd
console.log(myCreateDate5.toLocaleString());//1/14/2023, 12:00:00 AM

let myCreateDate6 = new Date("01-14-2023")//mm-yy-dd
console.log(myCreateDate6.toLocaleString());//1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()// when we create poll inside the webpage this time to set a timestamp
console.log(myTimeStamp);//give the milisecond value
console.log(myCreateDate6.getTime());//this one give the milisecond value

// this two value will compare in each-other


//give the value in second

 console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
 console.log(newDate)
console.log(newDate.getMonth()+ 1)//1(1st month)..bcz month will start from 0, so +1
console.log(newDate.getDay())//6(saturday)

//using string interpolation

console.log(`today date is ${newDate.toLocaleString()}`)  //today date is 1/10/2026, 7:18:00 AM

console.log(newDate.toLocaleString('default', {
    weekday: "long"
})
)   //saturday