var rect = require('./rectangle2');

/*
    With rectangle2.js
*/
function solveRect (a,b) {
    console.log(`Solving for rectangle l = ${a} and b = ${b}`);

    rect(a, b, (err, rectangle) => {
        if (err) {
            console.log(`ERROR: ${err.message}`);
        } else {
            console.log(`The perimeter of the rectangle with dimensions l = ${a} and b = ${b} is: ${rectangle.perimeter()}`);
            console.log(`The aread of the rectangle with dimensions l = ${a} and b = ${b} is: ${rectangle.area()}`);
        }
    });

    console.log('print this after all call to rect()');
}

solveRect(2,4);
solveRect(3,6);
solveRect(7,9);
solveRect(10,0);
solveRect(-3,5);
solveRect(4,-8);