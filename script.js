//arrays / strings
let ansAr = [];

let opStr = "";

let numAr = [];

//buttons
let numberButtons = document.querySelectorAll(".num-btn");

let opButtons = document.querySelectorAll(".op-btn");

let clrButton = document.querySelector("#clear-btn");

let addButton = document.querySelector("#add");

let subtractButton = document.querySelector("#sub");

let multiButton = document.querySelector("#multi");

let divideButton = document.querySelector("#div")

let equalButton = document.querySelector("#equ");

//displays
let displayMain = document.querySelector(".screen");

let displayAns = document.querySelector(".display-one")

let displayTwo = document.querySelector(".display-two")


// OPERATOR FUNCTIONS ON CLICK EVENT ------------>
//adds operator to string variable opStr, will only add in certain instances so that if you press "40" then "+" then 50 then "-" accidentally after it will still add the number rather than subtract them. 

opButtons.forEach(opBtnClick);

function opBtnClick(item){
    item.addEventListener("click", function(){
       if ((ansAr.length > 0 && numAr.length == 0) || (ansAr.length == 0 && numAr != 0)) {
        opStr = item.id;
       }
       else {
        return
       }

       console.log(opStr);
    })
}

//iterate over each item in the .num-btn class and add an addEventlistener + event, then push to array
numberButtons.forEach(numBtnClick);

console.log(numberButtons);

function numBtnClick (item){
    item.addEventListener("click", function(){
        numAr.push(item.id);
        displayTwo.innerText = numAr.join("");
    }
    )};


//changing operator button class so that the background is highlighted showing the user what operator is active, it will first clear all other operator classes of "active" so only one will be active at a time.

// this feature will only work if the item.id == opStr this is to improve the UI. For stance if you click "20", then "+", then "10" then "-" the calculator will add 20 and 10 giving you 30, however because of the above opButtons() function the opStr will not = sub. This mean if you were to press 5 and "=" nothing would happen because there is not operator to tell the operator function what to do (e.g. add, subtract, multiply, etc..). This background color change feature will alert the user to what operator, if any, is currently selected. 

opButtons.forEach(function (item){ item.addEventListener("click", function () {
    
addButton.classList.remove("active")
subtractButton.classList.remove("active")
multiButton.classList.remove("active")
divideButton.classList.remove("active")
equalButton.classList.remove("active")

 if (item.id == opStr){
item.classList.add("active") 
 } else {return 
}
})
});


opButtons.forEach(function (item){ item.addEventListener("click",function(){

    if (numAr.length != 0 && ansAr.length == 0 ) {
        for (let i = 0; i <= numAr.length; i++){
        ansAr.push(numAr[i]);
        }
        ansString = ansAr.join("");
        displayAns.innerText = ansString;
        numAr = [];
        displayTwo.innerText = "";
        } 
    else if (numAr.length != 0 && ansAr.length != 0 && opStr == "add"){
        let newAns = operator("+", Number(displayAns.innerText), Number(displayTwo.innerText));
        displayAns.innerText = newAns;
        numAr = [];
        displayTwo.innerText = "";
    }
    else if (numAr.length != 0 && ansAr.length != 0 && opStr == "sub"){
        let newAns = operator("-", Number(displayAns.innerText), Number(displayTwo.innerText));
        displayAns.innerText = newAns;
        numAr = [];
        displayTwo.innerText = "";
    }
console.log(`displayAns: ${typeof(displayAns.innerText)}`)
console.log(`displayTwo: ${typeof(displayTwo.innerText)}`)
console.log(operator("+", Number(displayAns.innerText), Number(displayTwo.innerText)))
    })
});


//equal buttons functions -------->


//testing Arrays/ strings
console.log(`numAr: ${numAr}`)
console.log(numAr);
console.log(`ansAr: ${ansAr}`)
console.log(ansAr)



//clear button/ function
clrButton.addEventListener("click", clear)

function clear(){

ansAr = [];
displayAns.innerText = "";
opStr = "";
numAr = [];
displayTwo.innerText = "";

addButton.classList.remove("active");
subtractButton.classList.remove("active");
multiButton.classList.remove("active");
divideButton.classList.remove("active");
};


// operators
const add = function(a, b) {
    let ans = (a + b);
    return ans;
};

const subtract = function(a, b) {
	let ans = (a - b);
    return ans;
};

const multiply = function(a, b) {
    let ans = a * b;
    return ans;
   
  };

const divide = function(a, b){
    let ans = (a / b);
    return ans;
};

function operator (op, num1, num2){
    if (op == "+"){
        return add(num1, num2);
    }
    else if (op == "-"){
        return subtract(num1, num2);
    }
    else if (op == "*"){
        return multiply(num1, num2);
    }
    else if (op == "/"){
        return divide(num1, num2)
    }
}


/*
console.log(operator("+", 1, 2));
console.log("answer: 3");
console.log(operator("*", 5, 5));
console.log("answer: 25");
console.log(operator("-", 10, 5));
console.log("answer: 5");
console.log(operator("/", 15, 5));
console.log("answer: 3");
*/