const array1 = [6, 5, 10, 44, 100, 189873, 3]
const array2 = [278364612, 222, 50, 1, 7846562, 888]
const string3 = "1 3 5 3 7 3 1 1 5"
const string4 = "11 42 57 11 63 42 71"
const string1 = "1 3 5 3 7 3 1 1 5"
const string2 = "2 2 5 5 5 9 7 2 1" // 

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
    let result = distinctValues(string3)
    let expected = '1 3 5 7' 
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)  
}

const testDistinctValues2 = () =>{
    let result = distinctValues(string4)
    let expected = '11 42 57 63 71' 
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const distinctValues = (string) => {
    let output = string.split(" ")
    return [...new Set(output)].join(" ")
}

testDistinctValues1()
testDistinctValues2()

function testCountValues1 () {
    let result = countValues(string1)
    let expected = "1(3) 3(3) 5(2) 7(1)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCountValues2 () {
    let result = countValues(string2)
    let expected = "1(1) 2(3) 5(3) 7(1) 9(1)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const countValues = (string) => {
    let output = {};
    let str = ""
    string.split(" ").forEach(item => {
        if (output[item] === undefined) {
            output[item] = 1;
        } else {
            output[item]++;
        }
    })
    for (let element in output) {
        str += `${element}(${output[element]}) `
    }
    return str.trim()
}

testCountValues1()
testCountValues2()

function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testEvaluateExpression2() {
     let result = evaluateExpression ("a - b + c - d + e", {a: 10, b: 20, c: 0, d: 200, e: 1})
     let expected = -209
     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 const evaluateExpression = (string, obj) => {
    let x = string.split(" ")
    let output = obj[string[0]]
    for (let i = 1; i < x.length; i+=2) {
        if (x[i] === "+") {
            output += obj[x[i+1]]
        } else {
            output -= obj[x[i+1]]
        }
    }
    return output
 }

 testEvaluateExpression1()
 testEvaluateExpression2()
