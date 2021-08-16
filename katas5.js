const array1 = [6, 5, 10, 44, 100, 189873, 3]
const array2 = [278364612, 222, 50, 1, 7846562, 888]
const array3 = [1, 3, 5, 3, 7, 3, 1, 1, 5]
const array4 = [11, 42, 57, 11, 63, 42, 71]

function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testeReverseString2() {
    let result = reverseString("VS Code");
    let expected = "edoC SV";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 const reverseString = (string) => {
     return string.split("").reverse().join("")
 }

 testeReverseString1()
 testeReverseString2()

function testReverseSentence1() {
    let result = reverseSentence("Kenzie Academy");
    let expected = "Academy Kenzie";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testReverseSentence2() {
    let result = reverseSentence("bob likes dogs");
    let expected = "dogs likes bobs"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const reverseSentence = (string) => {
    return string.split(" ").reverse().join(" ")
}

testeReverseString1()
testeReverseString2()

function testMinimumValue1 () {
    let result = minimumValue(array1);
    let expected = 3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue2 () {
    let result = minimumValue(array2);
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const minimumValue = (array) => {
    let result = array[0]
    array.forEach(element => {
        if (element < result) {
            result = element
        }
    });

    return result
}

testMinimumValue1()
testMinimumValue2()

function testMaximumValue1 () {
    let result = maximumValue(array1);
    let expected = 189873;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaximumValue2 () {
    let result = maximumValue(array2);
    let expected = 278364612;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const maximumValue = (array) => {
    let result = array[0]
    array.forEach(element => {
        if (element > result) {
            result = element
        }
    });

    return result
}

testMaximumValue1()
testMaximumValue2()

function testCalculateRemainder1 () {
    let result = calculateRemainder(11, 5);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2 () {
    let result = calculateRemainder(300, 17)
    let expected = 11
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const calculateRemainder = (n1, n2) => {
    return n1 % n2
}

testCalculateRemainder1()
testCalculateRemainder2()

const testDistinctValues1 = () =>{
    let result = distinctValues(array3)
    let expected = '1 3 5 7' 
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)  
}

const testDistinctValues2 = () =>{
    let result = distinctValues(array4)
    let expected = '11 42 57 63 71' 
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const distinctValues = (arr) => [...new Set(arr)].join(" ")

testDistinctValues1()
testDistinctValues2()

