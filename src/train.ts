//TASK-N

function palindromCheck (a:string) {
    if (a.split("").reverse().join("") == a) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}


palindromCheck("dad");
palindromCheck("laptop");









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