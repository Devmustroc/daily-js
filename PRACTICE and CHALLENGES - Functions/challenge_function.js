/**
 * CHALLENGE 1
 * Create function call "mult" and it will have 3 parameters.
 * Create new variable and assign to it result of multiplication of all 3 parameters.
 * Print to the console result.
 * Don't use "return"
 */

function mult(a, b ,c){
    const result = a * b * c;
    console.log(result);
}

mult(15, 6, 4) ;// 360

mult( 2, 3, 'abc'); // NaN

mult(); //NaN

console.log(mult(4,20,10)) // 800 and Undefined
