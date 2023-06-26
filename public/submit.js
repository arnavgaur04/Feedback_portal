var tbodyRef = document.getElementById('table').getElementsByClassName('tbody')[0];
var dataa, newRow, newCell_1, newCell_2, newCell_3;
var result = [];
var result_new = [];



$(document).ready(function () {
    $.post("/review",
    function (data, status) {
            setTimeout(function () {
                for (let index = 0; index < 11; index++) {
                    dataa = data[0].question[index];
                    for(var i in dataa)
                    result.push([i,dataa[i]]);
                }
                
                dataa = data[0].rev[0];
                
                for(var i in dataa)
                result_new.push([i,dataa[i]]);
            }, 2000);
        });
    setTimeout(function () {
        console.log(sessionStorage.getItem("ques"));
        for (let index = 0; index < 10; index++) {
            // Insert a row at the end of table
            newRow = tbodyRef.insertRow();
        
            // Insert a cell at the end of the row
            newCell_1 = newRow.insertCell(0);
            newCell_2 = newRow.insertCell(1);
            newCell_3 = newRow.insertCell(2);
        
            // Append a text node to the cell
            // var newText = document.createTextNode('new row');
            newCell_1.innerHTML = index+1;
            newCell_2.innerHTML = result[index*6 + 1][1];
            if (result_new[index+1][1] == null) {
                newCell_3.innerHTML = 'no option chosen';
            }
            else
            {
                newCell_3.innerHTML = '<b>' + result[6*index + 1 + result_new[index+1][1]][1] + '</b>';
            }
        }
    }, 3500);
});



