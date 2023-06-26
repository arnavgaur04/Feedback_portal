let arr;
var val, result, schools;
var type_selected = "Higher Secondary";
const secondary = [];
const higherSecondary = [];
const primary = [];
const upperPrimary = [];
const school_type = ["Primary", "Higher Secondary", "Upper Primary", "Secondary"];
const pswd = [];

window.onload = function() {
  if(!window.location.hash) {
      window.location = window.location + '#';
      window.location.reload();
  }
}

$.post("/school_type",
  function (data, status) {
  result = data;
  console.log(data);
  
  for (let i = 0; i < data[0].password.length; i++) {
    pswd.push(data[0].password[i]);
  }

  for (let i = 0; i < data[0].school_info.length; i++) {
    if (data[0].school_info[i].type == "Primary") {
      primary.push(data[0].school_info[i]);
    }

    else if (data[0].school_info[i].type == "Secondary") {
      secondary.push(data[0].school_info[i]);
    }

    else if (data[0].school_info[i].type == "Higher Secondary") {
      higherSecondary.push(data[0].school_info[i]);
    }

    else if (data[0].school_info[i].type == "Upper Primary") {
      upperPrimary.push(data[0].school_info[i]);
    }
  }

  var option = document.createDocumentFragment();
  for (var i = 0; i < 1; i++) {
      var newdiv = document.createElement('select');
      newdiv.id = 'option' + i;
      newdiv.className = 'option';
      option.appendChild(newdiv);
      document.getElementById('school-type').appendChild(option);
      var toAdd = document.createDocumentFragment();
      for (var j = 0; j < 4; j++) {
          var newDiv = document.createElement('option');
          newDiv.id = 'school_type' + (j + 1);
          newDiv.className = 'school_type';
          newDiv.textContent = school_type[j];
          toAdd.appendChild(newDiv);
      }
      document.getElementById('option' + i).appendChild(toAdd);
  }

  document.getElementById("school_type1").setAttribute('value', "Primary");
  document.getElementById("school_type2").setAttribute('value', "Higher Secondary");
  document.getElementById("school_type3").setAttribute('value', "Upper Primary");
  document.getElementById("school_type4").setAttribute('value', "Secondary");
  
  $("#option0").click(function () {
    val = $(this).val();
    // console.log(val);

    option = document.createDocumentFragment();
    $("#option1").remove();

    for (var i = 1; i < 2; i++) {
      newdiv = document.createElement('select');
      newdiv.id = 'option' + i;
      newdiv.className = 'option';
      option.appendChild(newdiv);
      document.getElementById('school-name').appendChild(option);
      toAdd = document.createDocumentFragment();

      if (val == "Primary") {
        for (var j = 0; j < primary.length; j++) {
          var newDiv = document.createElement('option');
          newDiv.id = 'school' + (j + 1);
          newDiv.className = 'school';
          newDiv.textContent = primary[j].name;
          toAdd.appendChild(newDiv);
        }
      }

      else if(val == "Upper Primary")
      {
        for (var j = 0; j < upperPrimary.length; j++) {
          var newDiv = document.createElement('option');
          newDiv.id = 'school' + (j + 1);
          newDiv.className = 'school';
          newDiv.textContent = upperPrimary[j].name;
          toAdd.appendChild(newDiv);
        }
      }
      
      else if(val == "Higher Secondary")
      {
        for (var j = 0; j < higherSecondary.length; j++) {
          var newDiv = document.createElement('option');
          newDiv.id = 'school' + (j + 1);
          newDiv.className = 'school';
          newDiv.textContent = higherSecondary[j].name;
          toAdd.appendChild(newDiv);
        }
      }
      
      else if(val == "Secondary")
      {
        for (var j = 0; j < secondary.length; j++) {
          var newDiv = document.createElement('option');
          newDiv.id = 'school' + (j + 1);
          newDiv.className = 'school';
          newDiv.textContent = secondary[j].name;
          toAdd.appendChild(newDiv);
        }
      }

      document.getElementById('option' + i).appendChild(toAdd);
    }
    
    if (val == "Primary")
    {
      for (var j = 0; j < primary.length; j++) {
        document.getElementById("school"+(j+1)).setAttribute('value', primary[j].school_id);
      }
    }
    else if(val == "Upper Primary")
    {
      for (var j = 0; j < upperPrimary.length; j++) {
        document.getElementById("school"+(j+1)).setAttribute('value', upperPrimary[j].school_id);
      }
    }
    
    else if(val == "Higher Secondary")
    {
      for (var j = 0; j < higherSecondary.length; j++) {
        document.getElementById("school"+(j+1)).setAttribute('value', higherSecondary[j].school_id);
      }
    }
    
    else if(val == "Secondary")
    {
      for (var j = 0; j < secondary.length; j++) {
        document.getElementById("school"+(j+1)).setAttribute('value', secondary[j].school_id);
      }
    }
  });

  $(function() {
    $('#submit').click();
    $('#option0').click();
  });

  $("#submit").click(function () {
      const password = document.getElementById('passcode_input').value ;
      console.log($("#option1").val()-1);
      if (password == pswd[val = $("#option1").val()-1].code) {
        $.post("/school_id",
        {
          sch_id: $("#option1").val()-1
        },
        function(data, status)
        {
          if (typeof(Storage) !== "undefined") {
            sessionStorage.setItem("ques", Number($("#option1").val()-1));
          }

          location.href = '/questions';
        });
      }
    
      else
      {
        alert("wrong password");
      }

  });

});




