/*/prime number
var flag =true
var num=13
for( var i =0;i*i<=num;i++)
{
    if(num%i ==0){
        flag= false
        break

   }   }

    if(flag==true){
        console.log('Number is Prime')
    }
else{
    console.log('number is  not prime')
}
*/
//2nd problem with var -SCOPING
if(10%2==0){
    let a=2
    console.log(a,'I AM FROM THE INSIDE IF BLOCK')

}
console.log(a,'I AM FROM OUTSIDE IF BLOCK')
//var z;
//console.log(z)


