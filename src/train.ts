
function hasProperty(a:object) {
    for (const ele of Object.values(a)) {
        if (typeof ele == "string") {
            console.log(true);
        }else{
            console.log(false);
        }
    }
}




hasProperty({name: "BMW"});   //return true
hasProperty({age: 22});





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
  Project Standards
  - Logging standards
  - Naming standards:
      function, method, variable => CAMEL
      class => PASCAL
     folder, file => KEBAB
      css => SNAKE
  - Error handling
 */


/*
  Traditional Api
  Rest Api
  GraphQL Api
  ...
 */

  /*
  Traditional td => SSR => EJS
  Modern fd => SPA => REACT  
   */