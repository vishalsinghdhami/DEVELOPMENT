//normal function
//no return type in js

function sayHI(){
    console.log('function said hi')
}
sayHI() //function invokation

//parameters in functions

function add(a ,b){ //a nb are parameters
    console.log("the addition is", a+b)
}
add(2,3) //2 and 3 are arguments

// multiply

function multiply(c ,d){
    return c*d
}
console.log('the multiplication is',multiply(3,4))

// function as first class citizens
//java script function aur variable mae koi antar nahi rkhti ahe

let sayHi =function(){
    console.log('hi')

}
sayHi()// we are calling this later whenever we want

//IIFE  (immediately invoked function EXPRESSION)

let Add = (function(a,b){
    return a+b })(20 ,10)//immediately invoked here
    console.log(Add)