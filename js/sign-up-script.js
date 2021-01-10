// jshint esversion:6
$(document).ready(function () {
    // if button is clicked
    $(".btn").click(function (e) {
        e.preventDefault();
        // get the input for all fields in the form
        var getName = $("#nameInput").val();
        var getMail = $("#mailInput").val();
        var getPassword = $("#passwordInput").val();
        var getAddress= $("#addressInput").val();

        // call weather API 
        //https://data.gov.sg/dataset
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
                address=0;
                for (var u = 0; u < data.items[0].forecasts.length; u++){
                    if (getAddress == data.items[0].forecasts[u].area){
                        address=1;
                        break;
                    }
                }
            },
            error:function(data){
                alert("Oh no! The server is experiencing some issues. Try refreshing the page again after 30 mins ,Thank you :)");
            }
        });
        
        // if there's already a signup in storage, parse it. 
        // if not, make count = 0 (to check if count>0, loop and see if email is already taken)
        if (localStorage.getItem('signUp')) {
            var signUpArray = JSON.parse(localStorage.getItem("signUp"));
            count=signUpArray.length;
        }else{
            count=0;
        }

        // call API  to check if email is valid
        // https://www.gmass.co/blog/email-verification-service/
        var settings = {
            "url": "https://verify.gmass.co/verify?email="+getMail+"&key=85df4d70-399f-473c-9c2e-5c8ac9114ed6",
            "method": "GET",
            "timeout": 0,
            "headers": {
            },
        };
        $.ajax(settings).done(function (response) {
            // error checking 1 : user to fill in all input before submitting
            if (getPassword=="" || getName=="" || getMail=="" || getAddress==""){
                alert("please fill in all inputs");
            }else{
                // error checking 2: user to fill in valid email address
                if (response.Valid == true){
                    // error checking 3: password must be 8 characters or more
                    if(getPassword.length>=8){
                        var flag = 1;
                        //error checking 4: user to input a uniqe email address everytime they sign up.
                        if (count>0){
                            for (var i = 0; i < signUpArray.length; i++) {
                                if(signUpArray[i].email == getMail){
                                    flag =0;
                                }
                            }
                        }
                        if (flag==1){
                            //check address is in the weather API data for area
                            if(address==1){
                                // pass all error checking. add to localstorage
                                let s= new signUp(getName,getMail,getPassword,getAddress);
                                let signUpArray =[];

                                if (localStorage.getItem('signUp')) {
                                    signUpArray = JSON.parse(localStorage.getItem("signUp"));
                                }

                                signUpArray.push(s);

                                localStorage["signUp"]=JSON.stringify(signUpArray);
                                alert("Sign up successful. You can log in now");
                            }else{
                                alert("We can't find the address");
                            }
                        }else{
                            alert("email taken");
                        }
                    }else{
                        alert("Password must be at least 8 characters long");
                    }
                }else{
                    alert("invalid mail.");
                }
            }   
        });
        // function object constructor
        function signUp(name,email,password,address){
            this.name=name;
            this.email=email;
            this.password=password;
            this.address=address;
        }
    });
});