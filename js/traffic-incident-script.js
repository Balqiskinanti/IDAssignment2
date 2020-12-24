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
        }
    })
})