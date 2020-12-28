// jshint esversion:6
$(document).ready(function (e) {
    // parse signup json to loop and check if user has sign up
    var signUpArray = JSON.parse(localStorage.getItem("signUp"));
    // get user input
    var getMail = $("#mailInput").val();
    var getPassword = $("#passwordInput").val();

    $("#mailInput").change(function (){
        getMail = $("#mailInput").val();
    });

    $("#passwordInput").change(function (){
        getPassword = $("#passwordInput").val();
    });

    $("#btn").click(function (e) {
        var flag = false;
        // loop sign up array to check if user sign up
        if(signUpArray == null){
            e.preventDefault();
            alert("please sign up");
        }else{
            for (var i = 0; i < signUpArray.length; i++) {
                // error checking 1: user to login with matching username and password as the one they've sign up
                // pass error checking. add to local storage
                if (signUpArray[i].email == getMail && signUpArray[i].password == getPassword){
                    flag = true;
                    let l= new login(signUpArray[i].name,signUpArray[i].email,signUpArray[i].password,signUpArray[i].address);
                    let loginArray =[];
                    loginArray.push(l);
                    localStorage["login"]=JSON.stringify(loginArray);

                    let s= new savedData(signUpArray[i].name,signUpArray[i].email,signUpArray[i].password,signUpArray[i].address);
                    let savedDataArray =[];
                    savedDataArray.push(s);
                    localStorage["savedData"]=JSON.stringify(savedDataArray);
                    alert("Login Successsful. \n Note: Logging in and out will clear previous data");
                }
            }
            if(flag != true){
                e.preventDefault();
                alert("wrong password");
            }

        }
    });

    // function object constructor for login
    function login(name,email,password,address){
        this.name=name;
        this.email=email;
        this.password=password;
        this.address=address;
    }
    //function object constructor for savedData
    function savedData(name,email,password,address){
        this.name=name;
        this.email=email;
        this.password=password;
        this.address=address;
    }

});