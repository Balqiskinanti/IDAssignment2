$(document).ready(function () {
    // parse signup json to loop and check if user has sign up
    signUpArray = JSON.parse(localStorage.getItem("signUp"));
    
    // get user input
    var getMail = $("#mailInput").val();
    var getPassword = $("#passwordInput").val();

    $("#mailInput").change(function (){
        getMail = $("#mailInput").val();
    })

    $("#passwordInput").change(function (){
        getPassword = $("#passwordInput").val();
    })
})