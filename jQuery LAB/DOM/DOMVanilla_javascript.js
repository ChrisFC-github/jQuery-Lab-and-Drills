document.addEventListener("DOMContentLoaded", function () { // DOM CONTENT loaded with callback function so body doesnt return as null ! DO THIS FIRST
    const colorArray = ["red", "blue", "green", "yellow", "pink", "brown", "orange", "silver"];
    //Objective 1
    let button1 = document.createElement("button");
    let objective1 = document.getElementById("objective1");
    button1.innerText = "Click for an Alert";
    button1.addEventListener("click", function () {
        alert("Alert Alert Alert");
    });
    objective1.appendChild(button1)

    //Objective 2
    let button2 = document.getElementById("button2");
    let textAlert = document.getElementById("textbox2");
    button2.addEventListener("click", function () {
        let alertBox = textAlert.value;
        alert(alertBox);
    });
    //obj 3
    let Div3 = document.getElementById("div3");
        Div3.addEventListener("mouseover", function () {
        Div3.style.backgroundColor = "yellow";
    });
        Div3.addEventListener("mouseout", function (event) {
        Div3.style.backgroundColor = "white";
    });
    //obj 4
    let par = document.getElementById("par4");
    par.addEventListener("click", function () {
        const randomNum = Math.floor((Math.random() * colorArray.length));
        par4.style.color = colorArray[randomNum];
    });

    //objective 5
    let a = 0;
    let Div5 = document.getElementById("div5");
    let Button5 = document.getElementById("button5");
    Button5.addEventListener("click", function () {
        if (a < 1) {
        let createSpan = document.createElement("span");
        createSpan.innerText = "Chris C";
        Div5.appendChild(createSpan);
        a++;
        } else {
            alert("Name has already been displayed");
        }
    });

    //objective 6
    let friends = ["Erick H", "Selina F", "Frederick S"];
    let ul6 = document.getElementById("ul6");
    let b = 0;
    let button6 = document.getElementById("button6");
    button6.addEventListener("click", function () {
        if (b < friends.length) {
            let li = document.createElement("li");
            let liTextNode = document.createTextNode(friends[b]);
            li.appendChild(liTextNode);
            ul6.appendChild(li);
            b++;
        } else {
            alert("I wonder if he has more friends");
        }
    });

});