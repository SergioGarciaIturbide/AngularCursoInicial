
function addNumbers(a:number, b:number){


    return a+b;
}

const addNumbersArrow = (a:number, b:number):string =>  {
    return `${a+b}`;
}

function multiply (firstNumber:number, secondNumber?:number, base:number=2):number {
    return firstNumber*base;
}

/* const result:number = addNumbers(1,7);
const result2:string = addNumbersArrow(1,7);
const multiplyResult:number = multiply(1)

console.table({result,result2,multiplyResult}); */

interface Character {
    name:string;
    hp:number;
    showHp:()=> void;
}

const healCharacter = (character:Character, amount:number ):Character => {

    character.hp += amount;
    return character;
}

const Suir:Character =  {
    name : "suir",
    hp:50,
    showHp(){
       console.log(`Puntos de vida de ${this.name}: ${this.hp}`); 
    }
}

healCharacter(Suir,20);

Suir.showHp();

export{};