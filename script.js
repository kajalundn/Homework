//---------------//
// oppgave 1a
//---------------//

// funksjon som splitter teksten inn i linjer
function splitLines(text) {
    return text.split("\n").filter(line => line !== "");
}

//---------------//
//oppgave 1b
//---------------//

// funksjon som tar inn en liste med tekst
function textToNumbers(textList) {
    return textList.map(Number);
}


//---------------//
//oppgave 1c
//---------------//

function showPairSums(numbers) {
    let resultList=document.getElementById("result");

    for (let i = 0; i < numbers.length - 1; i++) {
        
        let sum=numbers [i] + numbers[i + 1];

        let li=document.createElement("li");

        li.textContent= numbers[i] + "+" + numbers [i+1] + "=" + sum;

        resultList.appendChild(li);
    }
}


//---------------//
//test
//---------------//


//tester funksjon 1ba

let lines = splitLines("A\nB\nC\n");
console.log(lines);

// tester funksjon 1b
let numbers1 = textToNumbers (["1.2", "-3.4", "5.6"]);
console.log(numbers1);

// tester funksjon 1c

let numbers = [1, 2, 3, 4];

showPairSums(numbers)