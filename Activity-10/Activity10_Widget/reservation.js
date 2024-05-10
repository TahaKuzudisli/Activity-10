$(document).ready(function() {
    $("#tabs").tabs();

    $("#arrival_date").datepicker({
        minDate: 0, 
        maxDate: "+90D", 
        showButtonPanel: true 
    });

    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            "Close": function() {
                $(this).dialog("close");
            }
        }
    });

    $("#policies").click(function() {
        $("#dialog").dialog("open");
    });

    $("#reservation_form").submit(function(event) {
        var isValid = true;

        var arrivalDate = $("#arrival_date").val().trim();
        if (arrivalDate == "") {
            $("#arrival_date").next('span').text("This field is required.");
            isValid = false;
        } else {
            $("#arrival_date").next('span').text("");
        }

        var nights = $("#nights").val().trim();
        if (nights == "") {
            $("#nights").next('span').text("This field is required.");
            isValid = false;
        } else if (!/^\d+$/.test(nights)) {
            $("#nights").next('span').text("This field must be numeric.");
            isValid = false;
        } else {
            $("#nights").next('span').text("");
        }

        var name = $("#name").val().trim();
        if (name == "") {
            $("#name").next('span').text("This field is required.");
            isValid = false;
        } else {
            $("#name").next('span').text("");
        }

        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var email = $("#email").val().trim();
        if (email == "") {
            $("#email").next('span').text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").next('span').text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next('span').text("");
        }

        var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        var phone = $("#phone").val().trim();
        if (phone == "") {
            $("#phone").next('span').text("This field is required.");
            isValid = false;
        } else if (!phonePattern.test(phone)) {
            $("#phone").next('span').text("Enter a valid phone number (XXX-XXX-XXXX).");
            isValid = false;
        } else {
            $("#phone").next('span').text("");
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
