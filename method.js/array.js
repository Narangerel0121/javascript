const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits) // ["Banana", "Orange", "Apple", "Mango"]
// console.log(typeof fruits) // object
// console.log(Array.isArray(fruits)) // true --> array esehiig todorhoiloh
// console.log(fruits instanceof Array) // true --> array esehiig todorhoiloh
// console.log(fruits.length) // 4
// console.log(fruits[0]) // Banana
// console.log(fruits.at(0)) // Banana --> array.at(index)
// console.log(fruits.at()) // Banana --> An empty index like at() defaults to at(0).
// console.log(fruits.at(-1)) // Mango --> index-eer ni tuhain elementiig songoj avahad shiglana. Object bolon array deer []-n dotor -1 gej bicheed suuliin elementiig avch bolohgui uchir uuniig shiideheer eniig zohioson.
// console.log(fruits[fruits.length - 1]) // Mango
// console.log(fruits.toString()) // Banana,Orange,Apple,Mango
// console.log(fruits.push("Kiwi"), fruits) // 5  ["Banana", "Orange", "Apple", "Mango"] --> returns a new lenght, element nemeh
// console.log(fruits[fruits.length] = "Kiwi") // Kiwi --> element length ashiglaj nemeh
// console.log(fruits.fill("Strawberry")) // [ 'Strawberry', 'Strawberry', 'Strawberry', 'Strawberry' ] --> array.fill(value, start, end)
// console.log(fruits.includes("Pineapple")) // false --> true, false butsaadag
// console.log(fruits.includes("Apple", 1)) // true --> 1-s ehelj haigaarai. --> array.includes(element, start)
// console.log(fruits.indexOf("Apple")) // 2
// console.log(fruits.indexOf("Banana", 2)) // -1 --> returns -1 if the value is not found.
// console.log(fruits.join()) // Banana,Orange,Apple,Mango --> returns an array as a string.
// console.log(fruits.join(" and ")) // Banana and Orange and Apple and Mango --> array.join(separator)
// console.log(fruits.lastIndexOf("Orange")) // 1 --> right-left
// console.log(fruits.reverse()) // [ 'Mango', 'Apple', 'Orange', 'Banana' ]
// console.log(fruits.shift(), fruits) // Banana ["Orange", "Apple", "Mango"] --> shift = remove (removes the first item of an array)--> returns the shifted element

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"]; // array.copyWithin(target, start, end)
// // console.log(fruits.copyWithin(2,0,2)) // [ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi', 'Papaya' ] --> Copy to index 2, the elements from index 0 to 2:

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];
// console.log(arr1.concat(arr2)) // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ] --> join arrays
// console.log(arr1.concat(arr2, arr3)) // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin' ] --> array1.concat(array2, array3, ..., arrayX)
      
// const myArray = [[1,2],[3,4],[5,6]]; // [ 1, 2, 3, 4, 5, 6 ] 
// console.log(myArray.flat())

// const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
// console.log(myArr.flat()) // [ 1, 2, 3, [ 4, 5, 6 ], 7, 8 ] --> array.flat(depth)

// const text = 'naraa';
// console.group(Array.from(text)) // [ 'n', 'a', 'r', 'a', 'a' ] --> Create an array from a string

// const numbers = [4, 9, 16, 25];
// console.log(numbers.map(Math.sqrt)) // [ 2, 3, 4, 5] -->creates new array

// let names = Array.of("naraa", "tsatsaa", "anu", "michka")
// console.log(names) // [ 'naraa', 'tsatsaa', 'anu', 'michka' ] --> creates new array from the arguments(strings, numbers, arrays)

