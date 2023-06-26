// var nam = "<%= name %>";

// function check() {
//   const password = document.getElementById('passcode_input').value ;
//   if (password == '1234') {
//     console.log('correct' + nam);
//   }

//   else
//   {
//     console.log(password);
//   }
// }


$(document).ready(function () {
  $("#submit").click(function () {
     $.post("/request",
        {
           name: "viSion",
           designation: "Professional gamer"
        },
        function (data, status) {
           console.log(data);
        });
  });
});

console.log(123);
