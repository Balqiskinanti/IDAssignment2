// jshint esversion:6
$(document).ready(function(){
    // getting current date and breaking it to year,month,date,hours,minutes,seconds
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var date = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    // API for weather
    $.ajax({
        type:"GET",
        dataType: 'json',
        contentType:"text/plain",
        url:"https://api.data.gov.sg/v1/environment/2-hour-weather-forecast",
        headers:{
        },
        data: {
        },
        success:function(data){
            // get login array from localstorage
            // loop to see if user's input on home address area = API's data on location
            // check if time is morning, afternoon, evening or night
            // add message greetings and weather to html 
            var loginArray = JSON.parse(localStorage.getItem("login"));
            for (var i = 0; i < loginArray.length; i++) {
                for (var u = 0; u < data.items[0].forecasts.length; u++){
                    if (loginArray[i].address == data.items[0].forecasts[u].area){
                        var forecast = data.items[0].forecasts[0].forecast;
                        if(hours<12){
                            greetings = "Morning";
                        }else if(hours <=16){
                            greetings ="Afternoon";
                        }else if(hours <=18){
                            greetings = "Evening";
                        }else{
                            greetings ="Night";
                        }
                        $('.greetings').html(` <b> Good ${greetings} ${loginArray[i].name} </b>`);
                        $('.weather').html(` ${loginArray[i].address} is ${forecast}`);
                        break;
                    }
                }
            }
        },
        error:function(data){
            alert("Oh no! The server is experiencing some issues. Try refreshing the page again after 30 mins ,Thank you :)");
        }
    });
    //change hours to 00 format for API url to work
    if (hours<10){
        hours = "0"+hours;
    }
      if (minutes<10){
        minutes = "0"+minutes;
    }
    if (seconds<10){
        seconds = "0"+seconds;
    }
    var dateTime = `${year}-${month}-${date}T${hours}%3A${minutes}%3A${seconds}`;
    var url = "https://api.data.gov.sg/v1/transport/carpark-availability?date_time="+dateTime;
    var settings = {
        "url": url,
        "method": "GET",
        "timeout": 0,
        "headers": {
        },
    };
    var getCarParkNo = $("#carParkNoInput").val();

    $("#carParkNoInput").change(function (){
        getCarParkNo = $("#carParkNoInput").val();
    });
    // if button for parking is cliked
    // call API for carpark
    // loop to search for matching input and carpark number in API
    // append in html number slots left and type
    // if not found, alert user.
    $(".btn1").click(function(e){
        e.preventDefault();
        $.ajax(settings).done(function (response) {
            var getCarpark= response.items[0].carpark_data;
            for (var i = 0; i < getCarpark.length; i++) {
                flag=0;
                if (getCarParkNo == getCarpark[i].carpark_number){
                    var numberOfLots= getCarpark[i].carpark_info[0].lots_available;
                    var typeOfLots = getCarpark[i].carpark_info[0].lot_type;
                    $("#display").append(` ${numberOfLots} in type ${typeOfLots}`);
                    flag=1;
                    break;
                }
            }
            if(flag==0){
                alert("Invalid Carpark ID");
            }
        }).fail(function(response){
                alert("Oh no! The server is experiencing some issues. Try refreshing the page again after 30 mins ,Thank you :)");
            });
    });

    // if button for add new reminder is clicked
    // show form in html 
    // get user input
    $(".btn2").click(function(e){
        e.preventDefault();
        $("#addForm").show();
        $("#dateInput").change(function(){
            getDateInput = $("#dateInput").val();
        });
        $("#timeInput").change(function(){
            getTimeInput = $("#timeInput").val();
        });
        $("#reminderInput").change(function(){
            getReminderInput = $("#reminderInput").val();
        });
        //if save utton is clicked
        // concatenate date and time.
        // check if user has input time and date
        $(".btn3").click(function(e){
            e.preventDefault();
            try {
                getDateTimeInput = getDateInput+"T"+getTimeInput;
            } catch (error) {
                alert("please fill in the date and time input");
            }
            var savedDataArray = JSON.parse(localStorage.getItem("savedData"));
            var u = savedDataArray.length-1;
            //check if there is any time and reminder in savedData already
            // if yes, get that
            // if not, initialise as empty array
            try {
                if(savedDataArray[u].time.length == undefined){
                    dateTimeArray =[];
                    reminderArray =[];
                }else{
                    dateTimeArray = savedDataArray[u].time;
                    reminderArray = savedDataArray[u].reminder;
                }
            } catch (error) {
                dateTimeArray =[];
                reminderArray =[];
            }
            // append time and date to array
            dateTimeArray.push(getDateTimeInput);
            // append reminder to array
            // check if user already provide reminder
            // update savedDataArray in localStorage
            try {
                console.log(getReminderInput);
                reminderArray.push(getReminderInput);
                savedDataArray[u].time=dateTimeArray;
                savedDataArray[u].reminder=reminderArray;
                localStorage["savedData"]=JSON.stringify(savedDataArray);
                alert("Reminders saved. You can reload your browser now.");
            } catch (error) {
                alert("please fill in the reminder input");
            }
        });
    });
    var dateStr = year+"-"+month+"-"+date;
    var savedDataArray = JSON.parse(localStorage.getItem("savedData"));
    var loginArray = JSON.parse(localStorage.getItem("login"));
    // if button to show all reminder is clicked  
    $(".btn4").click(function(e){
        e.preventDefault();
        for (var i = 0; i < savedDataArray.length; i++) {
            if(savedDataArray[i].time == null){
                continue;
            }else{
                for (var u=0; u<savedDataArray[i].time.length; u++){
                    if(savedDataArray[i].name == loginArray[0].name){
                        var time = savedDataArray[i].time[u].replace("T"," ");
                        $(".show-all").append(`<tr><th> ${time}</th> <th> ${savedDataArray[i].reminder[u]}</th></tr>`);
                    }
                }
            }
        }
    });
    // append to html if there's any reminder today 
    // by comparing it with today's date
    for (var i = 0; i < savedDataArray.length; i++) {
        if(savedDataArray[i].time == null){
            continue;
        }else{
        for (var u=0; u<savedDataArray[i].time.length; u++){
            if(savedDataArray[i].name == loginArray[0].name){
                if(savedDataArray[i].time[u].substring(0,10) == dateStr){
                    var time = savedDataArray[i].time[u].replace("T"," ");
                    $(".show-today").append(` <br> ${time.substring(11,16)}  ${savedDataArray[i].reminder[u]}`);
                }
            }
        }
    }
    }
});