console.log('JS OK');


const firstname = prompt("inserisci il tuo nome; Luca");
console.log(firstname);



const surname = prompt("inserisci il tuo nome; Padurariu");
console.log(surname);



const color = prompt= prompt("inserisci il tuo nome; verde");
console.log(color);


const password = firstname + surname + color + '21';
console.log(password);

const finalmessage = document.getElementById("final-message");

finalmessage.innerHTML =` ${password}`;




