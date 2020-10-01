let sentences = ['Time for an adventure with Jake the Dog', 'Bacon pancakes makin bacon pancakes', 'Take some bacon and Ill put it in a pancake', 'Bacon pancakes thats what its gonna make', 'Bacon pancakes'];
let mistakes = 0;
let marginShift = 0;
let timeElapsed = 0;
let letterScore = 0;
let letterIndex = 0;
let totalSeconds = 0;
let letterCounter1 = 0;
let letterCounter2 = 1;
const sentenceDisplay = document.querySelector('#sentence');
const feedbackDisplay = document.querySelector('#feedback');
const yellowBlock = document.querySelector('#target-letter');
const letterDisplay = document.querySelector('#target-letter');
$(document).ready(function () { // hides uppercase keyboard upon page load but not using the content loaded
    $('#keyboard-upper-container').hide();
    $('.well').css("background-color", "white");
    sentenceDisplay.innerHTML = sentences[letterIndex] //displays default values before event is trigerred
    letterDisplay.innerHTML = sentences[letterIndex].substring(letterCounter1, letterCounter2);
});
$(document).keydown(function (event) { // uppercase shows when shift is pressed
    if (event.key === "Shift") {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
});
$(document).keyup(function (event) { // default lower KB reverts when Shift is on keyup 
    if (event.key === "Shift") {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
});
// highlight white on key release
$(document).keyup(function (event) {
    let key = event.which;
    let asciiLetter = event.key.charCodeAt(0);
    $(`#${asciiLetter}`).css("background-color", "white");
});
//keypress does not support SPECIAL KEYS LIKE keys such as tab, shift, ctrl, backspace
// can do 'keyup keydown', before calling function but not all browsers support this
// normal keys + special keys - I NEED HELP XD
// Records jQuery key events and wraps code for defining target letter, starting a new sentence, checking for correct typed letters/mistakes, and ending the game  
$(document).keypress("keydown", function (event) {
    marginShift = marginShift + 16.5;
    $('#yellow-block').css("margin-left", marginShift + "px");
    timer = setInterval(setTime, 1000); // 1 sec interval
    function setTime() {
        ++totalSeconds;
        timeElapsed = pad(totalSeconds % 60);
    }
    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
    $("#" + event.which).css("background-color", "yellow"); // a sandwich but has numbers instead :D
    console.log("Target letter: " + letterDisplay.innerHTML);
    if (event.key == letterDisplay.innerHTML) { // checks for matching letters with event key to increment score/mistakes with glyphicons
        letterScore++;
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        mistakes++;
    }
    // increment counter defining the substring range to pull a specific character and display the character onto letterDisplay / id ="target-letter"
    letterCounter1++;
    letterCounter2++;
    targetLetter = sentences[letterIndex].substring(letterCounter1, letterCounter2);
    letterDisplay.innerHTML = targetLetter
    console.log("Typed letter: " + event.key);
    console.log("Current score: " + letterScore)
    console.log("Mistakes: " + mistakes);
    // if statement used to bring target letter back to the first character of the string value everytime a sentence is completed
    if (letterCounter1 == sentences[letterIndex].length - 1) {
        marginShift = -16.5;
    }
    if (letterCounter1 == sentences[letterIndex].length) {
        letterIndex++;
        sentenceDisplay.innerHTML = sentences[letterIndex]
        letterCounter1 = 0;
        letterCounter2 = 1;
        $('span').remove('.glyphicon');
    }
    // if statement used to bring the typing game into an end if letterIndex is on its last leg
    if (letterIndex == sentences.length) {
        clearInterval(timer);
        $('div').remove('#yellow-block');
        $('div').remove('#feedback');
        letterDisplay.innerHTML = "";
        let characterTyped = letterScore + mistakes;
        let WPM = Math.round(((((characterTyped - 27) / 4.34) / timeElapsed) * 60)); //average number of letters per word from sentences array - 4.34
        let accuracy = (letterScore / characterTyped) * 100;
        var accuracy1 = accuracy.toFixed(2) // limits the returned value up to the hundredths 
        sentenceDisplay.innerHTML = "You finished the adventure with " + WPM + " words per minute and an accuracy of " + accuracy1 + " %";
        var popupButton = $('<input type="button" class="row col-lg-12 text-center" id="alertbtnSubmit" value="Restart the Typing Adventure"/>');
        $(popupButton).insertAfter("#sentence");
        $("#alertbtnSubmit").click(function () {
            window.location.reload();
        });
        feedback.innerHTML = "";
        $('span').remove('.glyphicon');
    } else {
        letterDisplay.innerHTML = sentences[letterIndex].substring(letterCounter1, letterCounter2);
    }
});