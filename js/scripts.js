$(document).ready(function(){
  $("#register").submit(function(event){
    event.preventDefault();
    var students = [];
    var uname = $("#inputUsername").val();
    var pword = $("#inputPassword").val();

    if (student.firstName.includes(uname) && pword === student.password) {
      $(".success").text("Log in successfull");
      window.location.replace("home.html");

    } else {
      $(".success").text("Username or Passord does not match");

    }



  });
});

var student = {
    firstName: ["Mwanafunzi", "Student", "Cohort", ""],
    lastName: "Moringa",
    password: "password",
    cohort: "mftp2",
    track: ["HTML","JavaScript","CSS"]
  };
