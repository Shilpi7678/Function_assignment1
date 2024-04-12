// q=1 Given length and breadth of a rectangle, return the area of the rectangle.

// function area_rectangle(l,b){
//     return l*b;

// }
// let area=area_rectangle(5,10);
// console.log("area of the rectangle",area);


// q=2 Take a number and print the square of the number.

// function square_of_number(a){
//     return a*a;
// }
// let number=square_of_number(3);
// console.log(number)



// q=3  Take two numbers and only print the integer part when a is divided by b.

// function integer_number(a,b){
//     let l=Math.floor(a/b)
//     console.log("integer_part :",l)
// }
// integer_number(10,3);



// q=4 Take a number and print out the last digit of the number.

// function last_digit(a){
//     return a%10;
// }
// let num=43435
// console.log("last_digit of number",last_digit(num))


// q=5 Take a number and find the cube of that number.

// function cube_of_number(a){
//     return a*a*a;
// }

// let num=2;
// let result=cube_of_number(num)
// console.log("cobe of number",num, "is",(result))

// q=6 Take a 3 digit number and print the reverse of that number. Ex - 235 = 532.




// q=7 Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7

// function sum_of_first_last_digit(a){
//     let numstr = a.toString(); 
//     let first = parseInt(numstr[0]);
//     let last = parseInt(numstr[numstr.length-1]);
//     return first + last;
// }

// let a = 2345;
// console.log("Sum of first and last digit of the number", a, "is", sum_of_first_last_digit(a));
// q=8 Take salary of five employees and print the average salary of all the employees.

// function salary_of_employees(one,two,therr,four,five){
//     sum=one+two+therr+four+five;
//     d=sum/5
//     return d

// }
// console.log(salary_of_employees(10,20,30,50,60));


// q=9 Take two numbers and swap them. Ex - a = 10, b=5; =&gt; a=5, b=10;

// function swapNumbers(a, b) {
//     let temp = a;
//     a = b;
//     b = temp;
//     return [a, b];
// }

// let a = 10;
// let b = 5;

// [a, b] = swapNumbers(a, b);
// console.log("a =", a);
// console.log("b =", b);

