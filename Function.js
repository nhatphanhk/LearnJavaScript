function say(message) {
    if(!message) {
        return;
    }
    console.log(message);
}

// say('Hello from Node');

//The arguments object
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// console.log(add(1, 2));

//Function hoisting
hoisted();
 
function hoisted() {
    console.log('This function is hoisted!');
}