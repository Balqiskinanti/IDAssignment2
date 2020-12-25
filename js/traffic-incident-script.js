$(document).ready(function(){
    var params = {
    };
    
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
            getTrafficIncidentsInput = $("#trafficIncidentsInput").val();
    
            $("#trafficIncidentsInput").change(function (){
                getTrafficIncidentsInput = $("#trafficIncidentsInput").val();
            })

            $(".btn").click(function (e){
                e.preventDefault();
                for (i = 0; i < data.value.length; i++) {
                    if (data.value[i].Message.toLowerCase().indexOf(getTrafficIncidentsInput.toLowerCase()) != -1){
                        console.log(`${data.value[i].Type} ${data.value[i].Message}`);
                    }
                }
            })
        }
    })
})