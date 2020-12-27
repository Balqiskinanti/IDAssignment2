// jshint esversion:6
$(document).ready(function (e) {
    // parse signup json to loop and check if user has sign up
    signUpArray = JSON.parse(localStorage.getItem("signUp"));
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
        flag = false;
        // loop sign up array to check if user sign up
        if(signUpArray == null){
            e.preventDefault();
            alert("please sign up");
        }else{
            for (i = 0; i < signUpArray.length; i++) {
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
                    alert("Login Successsful. \nSigning up and in multiple accounts will clear previous data. We recommend you to sign up with only one account. Signing out will also clear data");
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

    function savedData(name,email,password,address){
        this.name=name;
        this.email=email;
        this.password=password;
        this.address=address;
    }

});