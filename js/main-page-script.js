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
                console.log(loginArray[i].address);
                console.log(data.items[0].forecasts[0].area);
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
                        $('.greetings').html(` Good ${greetings} ${loginArray[i].name}`);
                        $('.weather').html(` ${loginArray[i].address} is ${forecast}`);
                        break;
                    }
                }
            }
        }
    })

    var dateTime = `${year}-${month}-${date}T${hours}%3A${minutes}%3A${seconds}`
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
      })

      $(".btn").click(function(e){
        e.preventDefault();
        $.ajax(settings).done(function (response) {
            
      //console.log(response);
      getCarpark= response.items[0].carpark_data;
      for (i = 0; i < getCarpark.length; i++) {
        if (getCarParkNo == getCarpark[i].carpark_number){
          carParkNo = getCarpark[i].carpark_number;
          numberOfLots= getCarpark[i].carpark_info[0].lots_available;
          typeOfLots = getCarpark[i].carpark_info[0].lot_type;
          $("#display").html(`${carParkNo} ${numberOfLots} ${typeOfLots}`);
          console.log(numberOfLots);
          break;
        }
      }
      });
      })

})