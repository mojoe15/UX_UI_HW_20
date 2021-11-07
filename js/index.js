$("#submit-form-button").click(function () {
    console.log("Sent message");
});

$("#dark-mode").click(function () {
    if ($("#dark-mode").text() === "Dark Mode") {
        $("#dark-mode").text("Light Mode");
        $(".hero").css("background-color", "rgb(53,48,42)");
        $("*").css("color", "rgb(252, 251, 240)");
        $(".btn").css("background", "transparent");
        $(".btn").css("color", "#c0c09e");
        $(".btn").css("border", "4px solid #c0c09e");
        $(".btn").hover(
            function () {
                $(this).css("background", "#c0c09e");
                $(this).css("color", "rgb(252, 251, 240)");
            },
            function () {
                $(this).css("background", "inherit");
            }
        );
        $(".contact-me").css("background-color", "#050403");
        $(".contact-me input").css("background-color", "#111010");
        $(".contact-me textarea").css("background-color", "#111010");
    } else {
        $("#dark-mode").text("Dark Mode");
        $(".hero").css("background-color", "inherit");
        $("*").css("color", "rgb(95, 97, 90)");
        $(".btn").css("background", "");
        $(".btn").css("color", "");
        $(".btn").css("border", "");
        $(".btn").hover(
            function () {
                $(this).css("background", "");
                $(this).css("color", "");
            },
            function () {
                $(this).css("background", "");
            }
        );
        $(".contact-me").css("background-color", "#050403");
        $(".contact-me input").css("background-color", "#111010");
        $(".contact-me textarea").css("background-color", "#111010");
    }
});
