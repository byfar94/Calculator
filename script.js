//arrays & strings
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

let backButton = document.querySelector("#back-btn");

let decimalButton = document.querySelector("#decimal-btn");

let powerButton = document.querySelector("#power");

//displays
let displayMain = document.querySelector(".screen");

let displayAns = document.querySelector(".display-one")

let displayTwo = document.querySelector(".display-two")


// OPERATOR FUNCTIONS ON CLICK EVENT ------------>
//adds operator to string variable opStr, will only add in certain instances so that if you press "40" then "+" then 50 then "-" accidentally after it will still add the number rather than subtract them. 

opButtons.forEach(opBtnClick);

function opBtnClick(item){
    item.addEventListener("click", function(){
       if ((ansAr.length > 0 && numAr.length == 0) || (ansAr.length == 0 && numAr != 0) || (ansAr.length > 0 && numAr.length > 0)) {
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
    )
};


//changing operator button class so that the background is highlighted showing the user what operator is active, it will first clear all other operator classes of "active" so only one will be active at a time.


//will remove class list from op buttons
function remClass () {
addButton.classList.remove("active");
subtractButton.classList.remove("active");
multiButton.classList.remove("active");
divideButton.classList.remove("active");
powerButton.classList.remove("active");
}

//will add active class to "active" button (one that has its operator in opStr) so that the background change and the user know which operator will be used when equal is clicked

opButtons.forEach(function (item){ item.addEventListener("click", function () {
    
remClass()

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
    })
});


//equal buttons functions -------->

equalButton.addEventListener("click", function (){
    if (numAr.length != 0 && ansAr.length != 0 && opStr == "add"){
        let newAns = operator("+", Number(displayAns.innerText), Number(displayTwo.innerText));
        displayAns.innerText = newAns;
        numAr = [];
        displayTwo.innerText = "";
        opStr = "";
        remClass ()
    }
    else if (numAr.length != 0 && ansAr.length != 0 && opStr == "sub"){
        let newAns = operator("-", Number(displayAns.innerText), Number(displayTwo.innerText));
        displayAns.innerText = newAns;
        numAr = [];
        displayTwo.innerText = "";
        opStr = "";
        remClass ()
    }
    else if (numAr.length != 0 && ansAr.length != 0 && opStr == "multi"){
        let newAns = operator("*", Number(displayAns.innerText), Number(displayTwo.innerText));
        displayAns.innerText = newAns;
        numAr = [];
        displayTwo.innerText = "";
        opStr = "";
        remClass ()
    }
    else if (numAr.length != 0 && ansAr.length != 0 && opStr == "div"){
        let newAns = operator("/", Number(displayAns.innerText), Number(displayTwo.innerText));
        displayAns.innerText = newAns;
        numAr = [];
        displayTwo.innerText = "";
        opStr = "";
        remClass ()
    }
    else if (numAr.length != 0 && ansAr.length != 0 && opStr == "power"){
        let newAns = operator("^", Number(displayAns.innerText), Number(displayTwo.innerText));
        displayAns.innerText = newAns;
        numAr = [];
        displayTwo.innerText = "";
        opStr = "";
        remClass ()
    }
})


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

remClass () 
};

// back space button (only for bottom display window)

backButton.addEventListener("click", function () {
    numAr.pop();
    displayTwo.innerText = numAr.join("");

})

//decimal button

decimalButton.addEventListener("click", function () {
    numAr.push(".");
    displayTwo.innerText = numAr.join("");
})

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

const power = function(a, b){
    let ans = (a ** b)
    return ans;
}

//operator function, used for when you click equal button
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
        return divide(num1, num2);
    }
    else if (op == "^"){
        return power(num1, num2);
    }
}

