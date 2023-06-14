/*const firstName = 'Glory';

const lastName = 'Jegede';
let address = "mainstreet";
address = "firststreet";

console.log(firstName);
console.log(lastName);
console.log(address);





const street = 'Elesare';
const country = 'Nigeria';
const fullMailingAddress = 'street' + ' ' + 'country';
console.log(street);
console.log(country);
console.log(fullMailingAddress);



const numbr = 434;
const numbr2 = 433;
console.log(typeof fullMailingAddress);

const result = numbr2 < numbr;

//if (result) {
 //    console.log('value is true');
//}

result ?  console.log('value is true'):console.log('value is false');*/


/*const names = [ 'Jegede', 'Glory', 'Gbolahan'];
const SurName = 'Jegede';
let newName = [];

for (var t = 0; t < names.length; t++);{
    console.log(t);
    console.log(`${names[t]} ${SurName}`);

    newName.push(names[t])
}

console.log(names);
console.log(newName);


function fullName(names) {
    console.log( 'My name is ' + names)
}
fullName('Jegede');
fullName('Glory');
fullName('Gbolahan');*/

let month = "April";
let age = 28;
function fullName(){
    console.log('I  am   Jegede by surname')
    console.log('I  am   Glory by middlename', month)
    console.log("I  am   Gbolahan my birthday is", age, "by lastname")
    console.log('I  am   Jegs by nickname')

};
fullName();

 function toCelcius(c) {
    var result = (c * 9/5) + 32;
    return result;
 }

Celcius = toCelcius (1000)
console.log(Celcius);


function toFarenheit(f) {
   return (f-32) * (5/9);
}
Farenheit = toFarenheit (100000)
console.log(Farenheit);
