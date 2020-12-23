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
    })
})