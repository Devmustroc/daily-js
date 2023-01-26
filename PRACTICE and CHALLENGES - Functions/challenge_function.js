/**
 * CHALLENGE 1
 * Create function call "mult" and it will have 3 parameters.
 * Create new variable and assign to it result of multiplication of all 3 parameters.
 * Print to the console result.
 * Don't use "return"
 */

/*function mult(a, b ,c){
    const result = a * b * c;
    console.log(result);
}

mult(15, 6, 4) ;// 360

mult( 2, 3, 'abc'); // NaN

mult(); //NaN

console.log(mult(4,20,10)) // 800 and Undefined*/

/**
 * Challenge -2
 * Create a function call "ConcatenatStrings' and it will have 2 params
 * And this function will return Concatenated string
 */

// function ConcatenatStrings(word1, word2) {
//     const result = word1 + " " + word2
//     console.log(result)
// }
//
// ConcatenatStrings("charlotte", "Jourdain");

/**
 * Callenge 3
 * Create function "outerFunction" with 2 params
 * Create fucntion insinde of the outer function and name it "inner function" with one params
 * this "innerfunction" will return square of params (params * params)
 * call "innerfunction" with arguments that is equal to sum of both params of the "outerFunction"
 */


// Simplified
/*function outerFunction(a, b){
    function innerFunction(c) {
        return c * c;
    }
    const sum = a + b;
    const result = innerFunction(sum);
    console.log(result);
}*/

/*function outerFunction(a , b) {
    const c = a + b
    const innerFunction = (c) => {
        const result = c * c
        return result
    }
    console.log(innerFunction(c))
    return innerFunction(a, b);
}*/

outerFunction(2, 3);
