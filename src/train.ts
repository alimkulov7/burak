//TASK-X
function countOccurrences(obj: any, key: string): number {
    let count = 0;

    for (let k in obj) {
        if (k === key) {
            count++;
        }
        if (typeof obj[k] === "object" && obj[k] ) {
            count = count + countOccurrences(obj[k], key);
        }
    }

    return count;
}

console.log(countOccurrences({ model: "A", s: { model: "B" } }, "model"));



//TASK-W
/* 
function chunkArray(a: any[], b: number): void {
    const result: any[] = [];
    for (let i = 0; i < a.length; i += b) {
        const ele = a.slice(i, i + b);
        result.push(ele);
    }

    console.log(result);
}

chunkArray([1, 2, 3, 4, 5], 2);
 */

//TASK-V

/* function countChars(a: string): void {
  const result: { [key: string]: number } = {};

  for (const ele of a) {
    if (result[ele] !== undefined) {
      result[ele] = result[ele] + 1;
    } else {
      result[ele] = 1;
    }
  }
  console.log(result);
}

countChars("hello");

 */
// return {h: 1, e: 1, l: 2, o: 1}

//TASK-T
/* 
function mergeSortedArrays(a:any[], b :any[]) {
    const c:any[] = a.concat(b).sort();
    console.log(c);
}


mergeSortedArrays([0,3,4],[2,5,6]);
 */


//TASK-S
/* const arr1: number[] = [];



function missingNumber(arr: number[]): void {
    for (let i = 1; i <= arr.length + 1; i++) {
        arr1.push(i);
    }
    
    const result = arr1.filter(num => !arr.includes(num));
    console.log(result);
}

missingNumber([1, 2, 4, 5]);
 */

// TASK-R


/* 
function calculate(expression: string): number {
  const [a, b] = expression.split("+").map(Number);

  return a + b;
}

console.log(calculate("1 + 3"));
console.log(calculate("4 + 7"));
 */

//TASK-Q

/* function hasProperty(a:object) {
    for (const ele of Object.keys(a)) {
        if (typeof ele == "string") {
            console.log(true);
        }else{
            console.log(false);
        }
    }
}




hasProperty({name: "BMW"});   //return true
hasProperty({age: 22});

 */



//TASK-P

/* function objectToArray (obj: object) {

    console.log(Object.entries(obj))   // ==> used to creat a nested array
   // const k = a.keys():String;
}





objectToArray({a: 10, b: 20,c:21})// return [["a", 10], ["b", 20]]
 */

//TASK-O
/* function calculateSumOfNumbers(arr: any[]) :void {
  let sum: number = 0;

  for (let i = 0; i < arr.length; i++) {
    
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }

  console.log(sum);
}



calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);


 */










//TASK-N

/* function palindromCheck (a:string) {
    if (a.split("").reverse().join("") == a) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}


palindromCheck("dad");
palindromCheck("laptop");
 */








/* // M-TASK
function getSquareNumbers(numbers: number[]) {
    for (let number of numbers) {
        const result = {
            number: number,
            square: number * number
        };

        console.log(result);
    }
}

getSquareNumbers([45,5,6]); */




/*
Request:
    Traditional Api
    Rest Api
    GraphQL Api
    ...
*/

/*
Frontend Development:
    Traditional FD     => SSR => EJS
    Modern FD          => SPA => REACT
*/

/*
Cookies:
    request join
    self destroy
*/

/*
Validation:
    Frontend validation
    Backend validation
    Database validation
*/
