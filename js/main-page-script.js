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
    //change the datestr same format as datetime for the checking to work
    if (month<10){
        month = "0"+month;
    }
      if (date<10){
        date = "0"+date;
    }
    var dateTime = `${year}-${month}-${date}T${hours}%3A${minutes}%3A${seconds}`;
    // API for weather
    // https://data.gov.sg/dataset
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
            if(hours<12){
                greetings = "Morning";
            }else if(hours <=16){
                greetings ="Afternoon";
            }else if(hours <=18){
                greetings = "Evening";
            }else{
                greetings ="Night";
            } 
            var loginArray = JSON.parse(localStorage.getItem("login"));
            try {
                $('.showWeather').append(`<tr><th>Area </th> <th> Forecast</th></tr>`);
                for (var u = 0; u < data.items[0].forecasts.length; u++){
                    var forecast = data.items[0].forecasts[u].forecast;
                    $('.showWeather').append(`<tr><td>${data.items[0].forecasts[u].area} </td> <td> ${forecast}</td></tr>`);
                }
                
                for (var i = 0; i < loginArray.length; i++) {
                    for (var u = 0; u < data.items[0].forecasts.length; u++){
                        if (loginArray[i].address == data.items[0].forecasts[u].area){
                            var forecast = data.items[0].forecasts[u].forecast;
                            $('.greetings').html(` <b> Good ${greetings} ${loginArray[i].name} </b>`);
                            $('.weather').html(` ${loginArray[i].address} is ${forecast}`);
                        }
                    }
                }      
            } catch (error) {
                $.ajax({
                    type:"GET",
                    dataType: 'json',
                    contentType:"text/plain",
                    url:"https://api.data.gov.sg/v1/environment/2-hour-weather-forecast",
                    headers:{
                    },
                    data: {
                        "date_time": "2020-12-31T23:00:00"
                    },
                    success:function(data){
                        // get login array from localstorage
                        // loop to see if user's input on home address area = API's data on location
                        // check if time is morning, afternoon, evening or night
                        // add message greetings and weather to html
                        if(hours<12){
                            greetings = "Morning";
                        }else if(hours <=16){
                            greetings ="Afternoon";
                        }else if(hours <=18){
                            greetings = "Evening";
                        }else{
                            greetings ="Night";
                        } 
                        var loginArray = JSON.parse(localStorage.getItem("login"));
                        // $('.showWeather').append(`<tr><th>Area </th> <th> Forecast</th></tr>`);
                        for (var u = 0; u < data.items[0].forecasts.length; u++){
                            var forecast = data.items[0].forecasts[u].forecast;
                            $('.showWeather').append(`<tr><td>${data.items[0].forecasts[u].area} </td> <td> ${forecast}</td></tr>`);
                        }
                        
                        for (var i = 0; i < loginArray.length; i++) {
                            for (var u = 0; u < data.items[0].forecasts.length; u++){
                                if (loginArray[i].address == data.items[0].forecasts[u].area){
                                    var forecast = data.items[0].forecasts[u].forecast;
                                    $('.greetings').html(` <b> Good ${greetings} ${loginArray[i].name} </b>`);
                                    $('.weather').html(` ${loginArray[i].address} is ${forecast}`);
                                }
                            }
                        }     
                    }
                });
            }
        },
        error:function(data){
            alert("Oh no! The server is experiencing some issues. Try refreshing the page again after 30 mins ,Thank you :)");
        }
    });
    // alert if there are no data
    var settings = {
        "url": "https://api.data.gov.sg/v1/transport/traffic-images?date_time="+dateTime,
        "method": "GET",
        "timeout": 0,
        "headers": {
        },
    };
      
    $.ajax(settings).done(function (response) {
        if(response.items[0].cameras.length == undefined){
            var div= document.createElement("div");
            div.className="error-message";
            $(".traffic-h1").append(div);
            $(".error-message").css("font-size","18px");
            $(".error-message").html("⚠️Data has not been updated yet. Please try again tomorrow.");
        }
    });
    // https://data.gov.sg/dataset
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
                    $("#display").html(` Parking slots left: <mark> ${numberOfLots} of type ${typeOfLots} <mark>`);
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
                $(".show-all").append(`<tr><th colspan=2> All Reminders </th></tr>`);
                for (var u=0; u<savedDataArray[i].time.length; u++){
                    if(savedDataArray[i].name == loginArray[0].name){
                        var time = savedDataArray[i].time[u].replace("T"," ");
                        $(".show-all").append(`<tr><td> ${time}</td> <td> ${savedDataArray[i].reminder[u]}</td></tr>`);
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
                    $(".show-today").append(` <br><mark> ${time.substring(11,16)}</mark>  ${savedDataArray[i].reminder[u]}<br>`);
                }
            }
        }
    }
    }
});