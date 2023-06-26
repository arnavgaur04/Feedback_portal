// $("#option0").click(function () {
//     val = $(this).val();
//     // console.log(val);
//     $.post("/schools_type",
//     {
//       schl_type: val
//     },
//       function (data, status) {
//         console.log(data[0]);
//         result = data;
//         // console.log($(this).val());
//         var option1 = document.querySelectorAll(".school_name");
//         for (let index = 0; index < option1.length; index++) {
//           option1[index].innerHTML = result[0].sch_typ[index].name;
//           document.getElementById("school_name"+(index+1)).style.display = "block";
//         }
        
//         for (let index = option1.length; index < 2 + option1.length; index++) {
//           console.log(index);
//           document.getElementById("school_name"+(index+1)).style.display = "none";
//         }
//     });
//   });
  