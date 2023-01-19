var now = dayjs();
var currentDay = $('#currentDay');



//Display the time on headers
currentDay.text("Today's schedule: " + now.format('DD MMM YYYY [at] hh:mm a'));

    $(document).ready(function() {
        console.log("jquery getting loaded");
        var d = new Date();
        var hour = d.getHours()
        console.log(hour);

        // change color at current time
        for (var i = 9; i < 17; i++){
            if(i < hour){
                var past = "#textarea-hour-".concat(i.toString());
                $(past).css("background-color", "grey");
            }
            if (i == hour){
                var current = "#textarea-hour-".concat(hour.toString());
                $(current).css("background-color", "red");
            }
            else if (i > hour){
                var future = "#textarea-hour-".concat(i.toString());
                $(future).css("background-color", "#77dd77");
            }
        }

        // Storing to local storage
        for (var i = 9; i < 17; i++){
            var idOfCurrentTextArea =  "#textarea-hour-".concat(i.toString());
            if (localStorage.getItem(i) != null){
                $(idOfCurrentTextArea).val(localStorage.getItem(i));
            }
            else{
                $(idOfCurrentTextArea).val("");
            }
        }

        //Save button when its clicked, text will be updated
        //Button doesnt work!!! 
        $("#saveTime").click(function(){
            for (var i = 9; i < 17; i++){
                var idOfCurrentTextArea =  "#textarea-hour-".concat(i.toString());
                localStorage.setItem(i,  $(idOfCurrentTextArea).val());
            }

          });

   })
   