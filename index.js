//1 Skriv en JavaScript-funksjon for å sjekke en string som er tom eller ikke.
function miTekst(str) {
    if (str === '') {
        return 'Teksten er tom';
    } else {
        return 'Teksten er ikke tom';
    }
}

console.log(miTekst('')); 
console.log(miTekst('Røyken VGS')); 


//2 Skriv en JavaScript-funksjon for å dele en tekst og konvertere den til en rekke ord.
let minTekst = "Manchester United 4 - 3 Liverpool"
console.log(minTekst.split(" "))

//3 Funksjon som sjekker om en tekst er et palindrom
function erPalindrom(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(erPalindrom('radar')); // true
console.log(erPalindrom('hello')); // false

//4 Skriv en JavaScript-funksjon som returnerer en tekst med bokstaver i alfabetisk rekkefølge.
function rekkfølgeSort(str) {
    return str.split('').sort().join('');
}
console.log(rekkfølgeSort(`Andreas`));

//5 Skriv en JavaScript-funksjon som tar to parametere, en tekst og en bokstav, og funksjonen vil telle antall forekomster av den angitte bokstaven i teksten.
function tellForekomster(text, letter) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

console.log(tellForekomster('Manchester United owns liverpool', 'e')); // 4


//6 Funksjonen sjekker ordet hver tredje bokstavene og skriver ut de tre.
function sjekkOrdet(str, antall) {
    let output = '';
    for (let i = 0; i < str.length; i += antall) {
        output += str.substr(i, antall) + '\n';
    }
    return output;
} 
console.log(sjekkOrdet('ABCAABCAAADA', 3));
