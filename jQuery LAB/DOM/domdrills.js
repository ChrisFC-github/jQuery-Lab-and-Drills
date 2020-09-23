document.addEventListener("DOMContentLoaded", function () { // DOM CONTENT loaded with callback function so body doesnt return as null ! DO THIS FIRST
    const colorArray = ["red", "blue", "green", "yellow", "pink", "brown", "orange", "silver"];
    let liNumber = 1;
    let div = document.createElement("div");
    
    // div.className = "header-container";
    // div.setAttribute"class", header-container")
    let button = document.getElementsByClassName("gumdrop-buttons");
    button[0].addEventListener("click", createNewListItem);


    let h1 = document.createElement("h1");
    let textNode1 = document.createTextNode("This is an h1!");
    h1.classList.add("h1");
    h1.appendChild(textNode1);
    h1.addEventListener("dblclick", function () {
        changeFontColor(h1);
    });
    div.appendChild(h1);
    document.body.appendChild(h1); // append child you can only do a div or an element

    let h2 = document.createElement("h2");
    let textNode2 = document.createTextNode("This is an h2!");
    h2.classList.add("h2");
    h2.appendChild(textNode2);
    h2.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * colorArray.length));
        h2.style.color = colorArray[randomNum];
    });
    div.appendChild(h2);
    document.body.appendChild(h2); // append child you can only do a div or an element


    let h3 = document.createElement("h3");
    let textNode3 = document.createTextNode("This is an h3!");
    h3.classList.add("h3");
    h3.appendChild(textNode3);
    h3.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * colorArray.length));
        h3.style.color = colorArray[randomNum];
    });
    div.appendChild(h3);
    document.body.appendChild(h3); // append child you can only do a div or an element

    let h4 = document.createElement("h4");
    let textNode4 = document.createTextNode("This is an h4!");
    h4.classList.add("h4");
    h4.appendChild(textNode4);
    h4.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * colorArray.length));
        h4.style.color = colorArray[randomNum];
    });
    div.appendChild(h4);
    document.body.appendChild(h4); // append child you can only do a div or an element

    let h5 = document.createElement("h5");
    let textNode5 = document.createTextNode("This is an h5!");
    h5.classList.add("h5");
    h5.appendChild(textNode5);
    h5.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * colorArray.length));
        h5.style.color = colorArray[randomNum];
    });
    div.appendChild(h5);
    document.body.appendChild(h5); // append child you can only do a div or an element

    let h6 = document.createElement("h6");
    let textNode6 = document.createTextNode("This is an h6!");
    h6.classList.add("h6");
    h6.appendChild(textNode6);
    h6.addEventListener("dblclick", function () {
        const randomNum = Math.floor((Math.random() * colorArray.length));
        h6.style.color = colorArray[randomNum];
    });
    div.appendChild(h6);
    document.body.appendChild(h6); // append child you can only do a div or an element

    function createNewListItem() {
        let li = document.createElement("li");
        let liTextNode = document.createTextNode("This is list item " + liNumber);
        li.addEventListener("click", function () {
            changeFontColor(li);
        });
        li.addEventListener("dblclick", function () {
            document.body.removeChild(li);
        });
        li.appendChild(liTextNode);
        document.body.appendChild(li);
        liNumber++
    }

    function changeFontColor(element) {
        const randomNum = Math.floor((Math.random() * colorArray.length));
        element.style.color = colorArray[randomNum];
    }
    
});

//no need to repeat appendchild div since it has already been specified

$(document).ready(function() { // 1
    var popupButton = $('<li><input type="button" id="alertbtnSubmit" value="Click for an Alert pop up"/></li>');
    $(popupButton).insertBefore("form");
    $("#alertbtnSubmit").click(function () {
        alert("This is a pretty (nice) message");
    });
});

$(function () {
    $("form").submit(function (e) {
        e.preventDefault();
        let textValue = $("input[type='text']").val();
        alert(textValue);
    });
});

$(document).ready(function(){
    $(".hover").hover(function(){
      $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "white");
    });
});

$('.paragraph').click(function () {
    let randomNumber1 = Math.floor(Math.random() * 255);
    let randomNumber2 = Math.floor(Math.random() * 255);
    let randomNumber3 = Math.floor(Math.random() * 255);
    $(this).css("color", `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`)
});

var a = 0;

$(document).ready(function() { // 5
    var popupButton1 = $('<li><input type="button" id="spanner" value="Click to show a name in a SPAN"/></li>');
    $(popupButton1).insertAfter("p");
    $("#spanner").click(function () {
        a++;
        if (a < 2) {
        var nameSpanner = $('<span> Chris C</span>');
        $(nameSpanner).insertAfter("#spanner");
        } else {

        }
    });
});

var b = 0;

$("#btnFriends").click(function () {
    const friendsArray = ["Erick H", "Selina F", "Fred S"];
    let friendsText = friendsArray[b];
    let li = $("<li></li>");
    if (b < friendsArray.length) {
    li.append(friendsText);
    $("ul").append(li);
    b++;
    } else {

    }
});
