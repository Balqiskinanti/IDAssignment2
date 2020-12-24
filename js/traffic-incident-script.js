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