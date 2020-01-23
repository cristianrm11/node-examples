var rect = require('./rectangle');

function solveRect (a,b) {
    if (a <= 0 || b <= 0) {
        console.log(`Rectangle dimensions should be greater than zero: a = ${a} and b = ${b}`);
    }
    else {
        console.log(`Solving for a = ${a} and b = ${b} \n`);
        console.log(`The area of the rectangle is: ${rect.area(a,b)}\n`);
        console.log(`The perimeter of the rectangle is: ${rect.perimeter(a,b)}\n`);
    }
}

solveRect(2,4);
solveRect(3,6);
solveRect(7,9);
solveRect(10,0);
solveRect(-3,5);
solveRect(4,-8);