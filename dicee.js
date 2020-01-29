
var num1 = Math.random();
num1 = Math.floor(num1 * 6) + 1;

function diceOneChange() {

    var n1 = num1;

    if (n1===1) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
    }
    else if (n1===2) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
    }
    else if (n1===3) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
    }
    else if (n1===4) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
    }
    else if (n1===5) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
    }
 
    var res1 = n1;
    return res1;
    
}



var num2 = Math.random();
    num2 = Math.floor(num2 * 6) + 1;

function diceTwoChange() {
  
    var n2 = num2;
    
    if (n2===1) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
    }
    else if (n2===2) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
    }
    else if (n2===3) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
    }
    else if (n2===4) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
    }
    else if (n2===5) {
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
    }

    var res2 = n2;
    return res2;

}



function showResult() {
    
    
    if (num1 > num2) {
        document.getElementById("result").textContent = "🚩 Player 1 Win!";
    }
    else if (num1 < num2) {
        document.getElementById("result").textContent = "Player 2 Win! 🚩";
    }
    else {
        document.getElementById("result").textContent = "Draw";
    }

}



diceOneChange();

diceTwoChange();

showResult();






// document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");

// onload(alert(n1));
