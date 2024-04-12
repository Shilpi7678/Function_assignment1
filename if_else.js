// 1. Write a program that checks if a given number is even or odd.

// function numbers(a){
//     if (a%2==0){
//         console.log("even")
//     }else{
//         console.log("old")
//     }
// }
// numbers(6)

// 2. Create a function that takes two numbers as parameters and returns the larger one.

// function larger_number(a,b){
//     if (a>b){
//         return a
//     }else{
//         return b
//     }
// }
// console.log(larger_number(4,8));

// 3. Write a function that determines if a given year is a leap year.

// function leap_year(a){
//     if ((a%4==0 && a%100 !==0) || (a%400==0)){
//         console.log("yes")
//     }else{
//         console.log("no")
//     }

// }
// leap_year(2005);
// 4. Implement a program that checks whether a given character is a vowel or consonant.

// function characters(char){
//     char=char.toLowerCase();
//     if (char=="a" || char=="e" || char == "i" || char == "o" || char =="u"){
//         console.log("vowel");

//     }else if((char>="a" && char<="z") && !isVowel(char)){
//         console.log("consonant");
//     } 
// }
// characters("a");
// 5. Create a function that takes three numbers as input and returns the largest among them.
// function  largest(a,b,c){
//     if (a>b && a>c){
//         console.log("largest a:",a)
//     }else if(b>a && b>c){
//         console.log("largest b :",b)
//     }else{
//         console.log("largest c:", c)
//     }
// }
// largest(4,8,2);

// 6. Write a program that checks if a given number is positive, negative, or zero.
// function checkumbers(num){
//     if (num >0){
//         return "positive";
//     }else if (num < 0){
//         return "negative";
//     }else{
//         return "zero"
//     }
// }

// console.log(checkumbers(-3))

// 7. Implement a function that calculates the grade of a student based on their score.


// function grade(numbers){
//     if (numbers>=90 && numbers<=80){
//         return "A"
//     }else if(numbers>=70 && numbers<=60){
//         return "B"
//     }else if (numbers>=50 && numbers<=40){
//         return "C"
//     }else{
//         return "D"
//     }

// }
// console.log(grade(85));
// 8. Create a program that determines if a given string is a palindrome.
// function palindrome(str) {
//     let store = str;
//     let reverse = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }
//     if (store === reverse){
//         return "palindrome"
//     }else{ 
//         return "not a palindrome"
//     }
// }
// console.log(palindrome("mam"));
// 9. Write a function that checks whether a person is eligible to vote based on their age.

// function vote(age){
//     if (age>=18){
//         console.log("this person is eligible for vote",age)
//     }else{
//         console.log("this person is not eligible for vote",age)
//     }
    
// }
// vote(2);
// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.

// function triangle(a, b, c) {
//     if (a == b && b == c && c == a) {
//         return "equilateral";
//     } else if (a == b || b == c || c == a) {
//         return "isosceles";
//     } else {
//         return "scalene";
//     }
// }

// console.log(triangle(2, 2, 2));

