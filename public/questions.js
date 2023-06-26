var cons = " ";
var count = 0;
var val, ques;
var chosen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function clear_options() {
    var ele = document.getElementsByClassName("radio");
    for (var i = 0; i < 4; i++)
        ele[i].checked = false;
}

var Circle = document.createDocumentFragment();
for (var i = 0; i < 2; i++) {
    var newdiv = document.createElement('div');
    newdiv.id = 'circle' + i;
    newdiv.className = 'circle';
    Circle.appendChild(newdiv);

    document.getElementById('numbers').appendChild(Circle);
    var toAdd = document.createDocumentFragment();
    for (var j = 0; j < 5; j++) {
        var newDiv = document.createElement('button');
        newDiv.id = 'number' + (5 * i + j + 1);
        newDiv.className = 'number';
        newDiv.textContent = (5 * i + j + 1);
        toAdd.appendChild(newDiv);

    }

    document.getElementById('circle' + i).appendChild(toAdd);

}

for (var j = 1; j < 11; j++) {
    var str = "#number" + j;
    var _str = 'name' + j;
    let Divsend = document.querySelector(str);
    Divsend.setAttribute('name', _str);
    Divsend.setAttribute('type', 'submit');
    Divsend.setAttribute('value', j);
}

function set(cons) {
    if (cons == 'one' || cons == 'two' || cons == 'three' || cons == 'four') {
        document.getElementById(cons).checked = true;
        document.getElementById("save").click();
    }
    else {
        document.getElementById("one").checked = false;
        document.getElementById("two").checked = false;
        document.getElementById("three").checked = false;
        document.getElementById("four").checked = false;
    }
}


window.addEventListener('load', function () {
    $(function () {
        $('#number1').click();
        $('#number1').click();
        $('#number1').click();
        $('#number1').click();
        $('#number1').click();
        $('#number1').click();
    });
})

$(document).ready(function () {
    $(".number").click(function () {
        val = $(this).val() - 1;
        clear_options();

        $.post("/questions_request",
            {
                ques_num: (val + 1)
            },
            function (data, status) {
                ques = data;
                console.log(data);
                document.getElementById('question').innerHTML = "<b>Q" + (val + 1) + ".  </b>&nbsp;" + ques[0].questions[val].question;
                document.querySelector('.ONE').innerHTML = ques[0].questions[val].one;
                document.querySelector('.TWO').innerHTML = ques[0].questions[val].two;
                document.querySelector('.THREE').innerHTML = ques[0].questions[val].three;
                document.querySelector('.FOUR').innerHTML = ques[0].questions[val].four;
                
                var dataa = ques[0].checkk[0];
                var result = [];
        
                for(var i in dataa)
                    result.push([i,dataa[i]]);
        
                var ele = document.getElementsByClassName("radio");
        
                for (let i = 0; i < 4; i++) {
                    if (ele[i].value == result[val+1][1]) {
                        ele[i].checked = true;

                    }
                }
            });

    });

    $("input").click(function () {
        var checked_input;
        chosen[val] = $(this).val();
        var ele = document.getElementsByClassName("radio");
        for (var i = 0; i < 4; i++) {
            if (ele[i].checked == true) {
                checked_input = (i + 1);
                count++; 
                break;
            }
        }

        $.post("/submitted",
            {
                input: checked_input,
                chosen: chosen
            });
    });
    
    $("#clear").click(function () {
        val = $(this).val() - 1;

        $.post("/clear",
        {
            ques_num: (val+1)
        });
    });

});




