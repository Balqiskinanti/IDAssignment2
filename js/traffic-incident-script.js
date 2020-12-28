// jshint esversion:6
$(document).ready(function(){
    var params = {
    };
    // call API for traffic incidents
    $.ajax({
        type:"GET",
        dataType: 'json',
        contentType:"text/plain",
        url:"https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/TrafficIncidents",
        headers:{
            "AccountKey": "IWsWRy4JSXqmTPOEbv5S0Q=="
        },
        data: {
        },
        success:function(data){
            // appending the incident message in the respective types
            var dataArray =[];
            for (i = 0; i < data.value.length; i++) {
                dataArray.push(data.value[i].Message);
                if(data.value[i].Type == "Accident"){
                    $(".accident").append("<br>"+data.value[i].Message).show();
                }else if(data.value[i].Type == "Roadwork"){
                    $(".roadwork").append("<br>"+data.value[i].Message).show();
                }else if(data.value[i].Type == "Vehicle breakdown"){
                    $(".breakdown").append("<br>"+data.value[i].Message).show();
                }else if(data.value[i].Type == "Weather"){
                    $(".weather").append("<br>"+data.value[i].Message).show();
                }else if(data.value[i].Type == "Obstacle"){
                    $(".obstacle").append("<br>"+data.value[i].Message).show();
                }else if(data.value[i].Type == "Road Block"){
                    $(".roadblock").append("<br>"+data.value[i].Message).show();
                }else if(data.value[i].Type == "Heavy Traffic"){
                    $(".traffic").append("<br>"+data.value[i].Message).show();
                }else if(data.value[i].Type == "Misc."){
                    $(".misc").append("<br>"+data.value[i].Message).show();
                }else if(data.value[i].Type == "Diversion"){
                    $(".diversion").append("<br>"+data.value[i].Message).show();
                }else if(data.value[i].Type == "Unattended Vehicle"){
                    $(".vehicle").append("<br>"+data.value[i].Message).show();
                }
            }
            // search function 
            // get user input for area
            getTrafficIncidentsInput = $("#trafficIncidentsInput").val();
    
            $("#trafficIncidentsInput").change(function (){
                getTrafficIncidentsInput = $("#trafficIncidentsInput").val();
            });

            // if button is clicked
            // show the message and type of incident
            $(".btn").click(function (e){
                e.preventDefault();
                $(".showIncident").html("");
                $(".showIncident").append(`<tr><th>Type</th><th>Incident</th></tr>`);
                for (i = 0; i < data.value.length; i++) {
                    if (data.value[i].Message.toLowerCase().indexOf(getTrafficIncidentsInput.toLowerCase()) != -1){
                        $(".showIncident").append(`<tr><th>${data.value[i].Type} </th> <th> ${data.value[i].Message}</th></tr>`);
                    }
                }
            });
        },
        // alert user if there's something wrong with API
        error: function(data){
            alert("Oh no! The server is handling too many data at once! Come back again tomorrow ,Thank you :)");
        }
    });
    
});