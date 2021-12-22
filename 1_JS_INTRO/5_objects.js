let obj ={} //object declaration

let person ={
name :'mohit',
age : 20,
Phone : 12345
}
console.log(person)

let cap ={
firstName : 'Steve',
lastName : 'rogers',
age : 102,
address : {

    state : 'Manhattan',
    country :'New YORK',
},

sayHi : function fn(){
    console.log('Captain say Hi')
}
}
console.log(cap)

console.log(cap.firstName)//DOT NOTATION// accesing property of an object
console.log(cap['firstName'])//BRACKET NOTATION

console.log(cap.address)

console.log(cap.address.country)

//console.log('my best friend is',cap.friends[2])

cap.sayHi()


///FOR IN LOOP

for( let key in cap)
{
console.log("key :",key,'Value :',cap[key])//for every key in this object uski value nikal di

}
cap.isAvenger = false // update a property of object

cap.movies =['Age of Ultron','First Avenger'] //add new property to an object

delete cap.age //delete a property from an object

console.log(cap)