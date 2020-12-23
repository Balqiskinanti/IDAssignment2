$(document).ready(function () {
    $(".btn").click(function (e) {
        e.preventDefault();

        // get the input for all fields in the form
        getName = $("#nameInput").val();
        getMail = $("#mailInput").val();
        getPassword = $("#passwordInput").val();
        getAddress= $("#addressInput").val();

        // if there's already a signup in storage, parse it. 
        // if not, make count = 0 (to check if count>0, loop and see if email is already taken)
        if (localStorage.getItem('signUp')) {
            signUpArray = JSON.parse(localStorage.getItem("signUp"));
            count=signUpArray.length;
        }else{
            count=0;
        }

        // api  to check if email is valid
        var settings = {
            "url": "https://verify.gmass.co/verify?email="+getMail+"&key=85df4d70-399f-473c-9c2e-5c8ac9114ed6",
            "method": "GET",
            "timeout": 0,
            "headers": {
            },
        };
        $.ajax(settings).done(function (response) {
            let s= new signUp(getName,getMail,getPassword,getAddress);
            let signUpArray =[];

            if (localStorage.getItem('signUp')) {
                signUpArray = JSON.parse(localStorage.getItem("signUp"));
            }

            signUpArray.push(s);

            localStorage["signUp"]=JSON.stringify(signUpArray);
            alert("Sign up successful. You can log in now");
            $("#myForm")[0].reset()
        })
    })
})