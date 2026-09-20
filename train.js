//L-TASK

function reverseSentence(a) {
    const b = a.split(" ");
    let result = [];

    for (const value of b) {
        result.push(value.split("").reverse().join(""));
    }
    console.log(result.join(" "));
}

reverseSentence("we like coding!")
