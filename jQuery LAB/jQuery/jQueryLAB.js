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
            alert("Name has already been displayed");
        }
    });
});

const friendsArray = ["Erick H", "Selina F", "Fred S"];
var b = 0;

$("#btnFriends").click(function () {
    let friendsText = friendsArray[b];
    let li = $("<li></li>");
    if (b < friendsArray.length) {
    li.append(friendsText);
    $("ul").append(li);
    b++;
    } else {
        alert("I wonder if he has more friends");
    }
});