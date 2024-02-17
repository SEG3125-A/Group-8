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
// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["02/24/2024","02/07/2024","02/10/2024"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
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
    

    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});