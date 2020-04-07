const myObject = {
    key1: "value",
    key2: "value",
    key3: "value",
    etc:"..."
}

//------COMMON JS------
const key1 = myObject.key1;
const blabla = myObject.key2;

//--------ES6-------------
const { 
    key1,           //Récuperation de "key1"
    blabla: key2    //Récuperations de "key2" et renommer en blabla
    key6 = "default", //Récuperation de key- et initialisation si elle contient "undefined"
    ...rest         // objet contenant les clés non récuperées (ici "key3", etc)
} = myObject;

//EXAMPLE OBJECT
const user = {
    firstName: "Omy",
    lastName:  "Queve",
    birthdate: new Date(1986, 0, 20), //---Le mois commence a 0
}

//=========================================

const myArray = [
    "value1", // index 0
    "value2", // index 1
    "value3", // index 2
    "value4", // index 3
]

const index0 = myArray[0];

const [ index0, index1, untruc, ...rest2 ] = myArray;

console.log(rest2);

//Pour les plus martout entre nous

let a = "world";
let b = "hello";

[ a, b ] = [ b, a ];

console.log(a, b);