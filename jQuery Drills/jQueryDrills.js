$(function () {
    $("#btnSubmit").attr("disabled", true);
    $('body').append("<div></div>");
    $('body').append("<ul></ul>");
    // $("#btnSubmit").click(function () {
    //     alert("a message!");
    // });

    $("form").submit(function (e) {
        e.preventDefault();
        let textValue = $("input[type='text']").val();
        // alert(textValue);
        // let h2 = $("<h2></h2>");
        // h2.append(textValue);
        // $("div").append(h2);
        // h2.hover(
        //     function () {
        //         h2.css({
        //             "background-color": "red",
        //             "border-radius": "5px"
        //         })
        //     },
        //     function () {
        //         h2.css({
        //             "background-color": "white",
        //             "border-radius": "0"
        //         })
        //     }, 
        // );

        let li = $("<li></li>");
        li.append(textValue);
        $("ul").append(li);

        li.click(function () {
            let randomNumber1 = Math.floor(Math.random() * 255);
            let randomNumber2 = Math.floor(Math.random() * 255);
            let randomNumber3 = Math.floor(Math.random() * 255);

            li.css("color", `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`)
        });

        li.dblclick(function () {
            li.remove(); 
        });
    });

    $(document).keyup(function () {
        if ($("input[type='text']").val() == "") {
            $("#btnSubmit").attr("disabled", true);
        } else {
            $("#btnSubmit").attr("disabled", false);
        }
    });
});