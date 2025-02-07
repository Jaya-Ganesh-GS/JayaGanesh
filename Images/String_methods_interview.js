
// 1 QA
console.log('hello' - 'world');
// Ans NaN , Explanation: Subtracting strings is not a valid operation in JavaScript, resulting in NaN

// 2 QA
console.log('hello' + 'world');
// Ans helloworld ,Explanation: + operator concatenates strings

// 3 QA
console.log('hello'.length);
// Ans 5, Explanation: return length of string

// 4 QA 
console.log('hello'.charAt(3));
// Ans l,Explanation: charAt() method returns the character at the specified index

// 5 QA
console.log('hello'.toUpperCase());
// Ans HELLO,Explanation: toUpperCase() returns the all characters in Caps

// 6 QA
console.log('hello' === 'Hello');
// Ans false,Explanation: checks both value and datatype, in this case value are same but data type is different so false!

// 7 QA
console.log('hello'.split(''));
// Ans ['h','e','l','l','o'], Explanation: split('') splits the string into an array of characters.

// 8QA
console.log('hello'.replace('l', 'L'));
// Ans heLlo, Explanation: replace('l', 'L') replaces the first occurrence of 'l' with 'L'.

// 9QA
console.log('hello'.indexOf('l'));
// Ans 2, Explanation: indexOf('l') returns the index of the first occurrence of 'l' in the string.

// 10QA
console.log('hello'.repeat(3));
// Ans hellohellohello , Explanation: The repeat method duplicates 'hello' three times.

// 11QA
console.log('hello'[1]);
// Ans e , Explanation: returns character at index 1 when we use [index] !

// 12QA
console.log('hello'.concat(' ', 'world'));
// Ans hello world, Explanation: concat method appends 'world' to 'hello' with a space in between.

//Array Methods

// 1- Print unique values from an array
const arr = [1, 2, 3, 3, 4, 5, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);  // [1, 2, 3, 4, 5]

// 2- How do you use the reduce() method to sum elements in an array without using a loop?
const arr3 = [1, 2, 3, 4, 5];
const sum = arr3.reduce((acc, current) => acc + current, 0);
console.log(sum);  // 15

// 3- How can you flatten a nested array into a single flat array?
const arr1 = [1, [2, 3], [4, [5, 6]]];
const flatArr = arr1.flat(Infinity);
console.log(flatArr);  // [1, 2, 3, 4, 5, 6]

// 4- How can you find the intersection of two arrays?
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const intersection = array1.filter(item => array2.includes(item));
console.log(intersection);  // [3, 4]

// 5- Write a function that swaps the first two elements in a given array (solve with destructing)
function swapFirstTwo([first, second, ...rest]) {
    return [second, first, ...rest];
}

const array = [3, 5, 1, 4, 2];
console.log(swapFirstTwo(array));  // [5, 3, 1, 4, 2]

// 6- Explain different ways to reverse an array and show each with a code example
// Reversing Array Elements Method 1: Using the reverse() method
const array3 = [1, 2, 3, 4, 5];
const reversedArr1 = array3.reverse();
console.log(reversedArr1); // [5, 4, 3, 2, 1]

// Reversing Array Elements Method 2: Using the spread operator and reverse()
const array4 = [1, 2, 3, 4, 5];
const reversedArr2 = [...array4].reverse();
console.log(reversedArr2); // [5, 4, 3, 2, 1]

// 7- How do you use the filter() method to filter out odd numbers from an array?
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8]

// 8- How can you add elements to an array?
let fruits = ['apple', 'banana'];
fruits.push('cherry'); // Adds 'cherry' to the end
console.log(fruits);
fruits.unshift('mango'); // Adds 'mango' to the beginning
console.log(fruits);

// 9-How can you remove elements from an array?
let fruits1 = ['apple', 'banana', 'cherry'];
fruits.pop(); // Removes 'cherry' from the end
console.log(fruits1); 
fruits.shift(); // Removes 'apple' from the beginning
console.log(fruits1);

// 10- How do you use the forEach method?
let fruits3 = ['apple', 'banana', 'cherry'];
fruits3.forEach((fruit, index) => {
  	console.log(`Fruit at index ${index} is ${fruit}`);
});

// 11- how to find a value in array?

let numbersarray = [1, 2, 3, 4, 5];
let foundNumber = numbersarray.find(nums => nums > 3);
console.log(foundNumber);

//12- How do you use the some method?

// The some method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

let numbersarray1 = [1, 2, 3, 4, 5];
let hasEvenNumber = numbersarray1.some(nums1 => nums1 % 2 === 0);
console.log(hasEvenNumber);

// 13-  Explain the fill method with an example.
// The fill method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array length).
//  It returns the modified array. The fill method is useful for initializing an array with a specific value or resetting elements in an existing array.

let numbersarray2 = [1, 2, 3, 4];
numbersarray2.fill(0, 2, 4); // Fills with 0 from index 2 to 4 (exclusive)
console.log(numbersarray2);

// 14-  How do you merge two arrays and remove duplicates?
// You can merge two arrays and remove duplicates by using the Set object, which automatically removes duplicate values.

let arraynumber1 = [1, 2, 3];
let arraynumber2 = [2, 3, 4];
let mergedArray = [...new Set([...arraynumber1, ...arraynumber2])];
console.log(mergedArray);

// 15-  How can you convert an array to a string?

// An array can be converted to a string using the toString or join method.

let fruits4 = ['apple', 'banana', 'cherry'];
console.log(fruits4.toString()); 
console.log(fruits4.join(', '));