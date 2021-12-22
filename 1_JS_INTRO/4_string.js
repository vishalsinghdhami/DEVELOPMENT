let str = 'pepcoders'
console.log(str)

//methods-
//length of string
console.log(str.length,'the length of string')

//extracting a part of a string
//1 //slice
//slice (start , end+1)

let slicedStr = str.slice(3,7)
console.log(slicedStr)

//2 //substr
let subString = str.substr(3)
console.log(subString)

// 3// replacing string content
//let sayHello = 'hello palak'

//4// to uupar case to lower case

let text1='HELLO world'
let text2 =text1.toUpperCase()
console.log(text2)
 //5// to lower case

let text3 =text1.toLowerCase()
console.log(text3)
 //6//concatenation
 let firststring = 'hello'
 let secondstring = 'vishal'

 let concatenation =firststring.concat(" ",secondstring)
console.log(concatenation)

//7//TRIM METHOD
  let TEXT = '            hello             worldddd       '
  console.log(TEXT)
let trimmedtext =TEXT.trim()
  console.log(trimmedtext)



