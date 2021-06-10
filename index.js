/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for(let i = 0; i <= 20; i++) {
  console.log(i);
};

for(let i = 1; i <= 20; i += 2) {
  console.log(i);
};

for(let i = 14; i >= -14; i -= 2) {
  console.log(i);
};

let i = 50
while (i >= 20) {
  if (i % 3 == 0){
    console.log(i);
      i--;
    } else {
      i--;
    }
 }


/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].*/


/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

let str = "LaunchCode";
let aArray = [1, 5, "LC101", "blue", 42];
let newStr = "";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

for (let i = 0; i = aArray.length; i++) {
  console.log(aArray[i]);
}

for (let i = 0; i < str.length; i++) {
  newStr = str[i] + newStr;
}
console.log(newStr);

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let newArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let arrayE = [];
let arrayO = [];

for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] % 2 == 0) {
    arrayE.push(newArray[i]);
  } else {
    arrayO.push(newArray[i]);
  }
}
console.log(arrayE);
console.log(arrayO);