function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^(\d{3}-\d{3}-\d{4}|\d{10})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCard(cardNum) {
    var a = document.getElementById(cardNum).value;
    var filter = /^(\d{4}-\d{4}-\d{4}-\d{4}|\d{16})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
function validateCVV(cardCVV) {
    var a = document.getElementById(cardCVV).value;
    var filter = /^(\d{3}|\d{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phoneNumber").on("change", function(){
        if (!validatePhone("phoneNumber")){
            alert("Wrong format for phoneNumber");
            $("#phoneNumber").val("");
            $("#phoneNumber").addClass("error");
        }
        else {
            $("#phoneNumber").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#appointmentDate" ).datepicker(
        {
            dateFormat: setDateFormat,
            minDate: new Date('02/01/2024'),  
            maxDate: '+4M',
            beforeShowDay: function(date) {
                var day = date.getDay();
                return [(day != 0), ''];
            }
        }   
    );
    $("#cardNumber").on("change", function(){
        if (!validateCard("cardNumber")){
            alert("Wrong format for cardNumber");
            $("#cardNumber").val("");
            $("#cardNumber").addClass("error");
        }
        else {
            $("#cardNumber").removeClass("error");
        }
    });
    $("#cardCVV").on("change", function(){
        if (!validateCard("cardCVV")){
            alert("Wrong format for cardCVV");
            $("#cardCVV").val("");
            $("#cardCVV").addClass("error");
        }
        else {
            $("#cardCVV").removeClass("error");
        }
    });



});