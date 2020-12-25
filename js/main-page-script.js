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
})