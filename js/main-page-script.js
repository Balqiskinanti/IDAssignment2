// jshint esversion:6
$(document).ready(function(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var date = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var params = {
        
    };

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
            loginArray = JSON.parse(localStorage.getItem("login"));
            for (i = 0; i < loginArray.length; i++) {
                for (u = 0; u < data.items[0].forecasts.length; u++){
                    if (loginArray[i].address == data.items[0].forecasts[u].area){
                        var forecast = data.items[0].forecasts[0].forecast;
                        if(hours<12){
                            greetings = "Morning";
                        }else if(hours <=16){
                            greetings ="Afternoon";
                        }else if(hours <=19){
                            greetings = "Evening";
                        }else{
                            greetings ="Night";
                        }
                        console.log(hours);
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
    console.log(url);
      var settings = {
      "url": url,
      "method": "GET",
      "timeout": 0,
      "headers": {
      },
      };
      getCarParkNo = $("#carParkNoInput").val();

      $("#carParkNoInput").change(function (){
          getCarParkNo = $("#carParkNoInput").val();
      });

      $(".btn1").click(function(e){
        e.preventDefault();
        $.ajax(settings).done(function (response) {
      getCarpark= response.items[0].carpark_data;
      for (i = 0; i < getCarpark.length; i++) {
        flag=0;
        if (getCarParkNo == getCarpark[i].carpark_number){
          carParkNo = getCarpark[i].carpark_number;
          numberOfLots= getCarpark[i].carpark_info[0].lots_available;
          typeOfLots = getCarpark[i].carpark_info[0].lot_type;
          $("#display").append(` ${numberOfLots} in type ${typeOfLots}`);
          flag=1;
          break;
        }
      }
      if(flag==0){
          alert("Invalid Carpark ID");
      }
      })
      .fail(function(response){
          alert("Oh no! The server is experiencing some issues. Try refreshing the page again after 30 mins ,Thank you :)");
      })
      });


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
          $(".btn3").click(function(e){
              e.preventDefault();
              try {
                getDateTimeInput = getDateInput+"T"+getTimeInput;
              } catch (error) {
                  alert("please fill in the date and time input");
              }
              console.log(getDateTimeInput);
              savedDataArray = JSON.parse(localStorage.getItem("savedData"));
              loginArray = JSON.parse(localStorage.getItem("login"));
              u = savedDataArray.length-1;
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
              
            
                    
            dateTimeArray.push(getDateTimeInput);
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
      dateStr = year+"-"+month+"-"+date;
      savedDataArray = JSON.parse(localStorage.getItem("savedData"));
      loginArray = JSON.parse(localStorage.getItem("login"));
      
    $(".btn4").click(function(e){
        e.preventDefault();
    for (i = 0; i < savedDataArray.length; i++) {
        if(savedDataArray[i].time == null){
            continue;
        }else{
        for (u=0; u<savedDataArray[i].time.length; u++){
            if(savedDataArray[i].name == loginArray[0].name){
                time = savedDataArray[i].time[u].replace("T"," ");
                $(".show-all").append(`<tr><th> ${time}</th> <th> ${savedDataArray[i].reminder[u]}</th></tr>`);
            }
        }
    }
    }
    });
    
    for (i = 0; i < savedDataArray.length; i++) {
        if(savedDataArray[i].time == null){
            continue;
        }else{
        for (u=0; u<savedDataArray[i].time.length; u++){
            if(savedDataArray[i].name == loginArray[0].name){
                if(savedDataArray[i].time[u].substring(0,10) == dateStr){
                    time = savedDataArray[i].time[u].replace("T"," ");
                    $(".show-today").append(` <br> ${time.substring(11,16)}  ${savedDataArray[i].reminder[u]}`);
                }
            }
        }
    }
    }

});