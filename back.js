const express = require("express")
const path = require("path");
var i = 0;
var pass, ques, input, ques_num, check, review, schl, info, schl_typ, schl_typee, pswd;
const app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "shine"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM passcode", function (err, result, fields) {
    if (err) throw err;
    pass = result[0].code;
  });

  con.query("SELECT * FROM questions", function (err, result, fields) {
    if (err) throw err;
    ques = result;
  });

});

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

app.get('/questions', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/questions.html'));
})

app.get('/submit', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/submit.html'));
})

app.post('/submitted', (req, res) => {
  input = req.body.input;
  if (input == undefined || ques_num == undefined) {
    console.log('no input yet');
  }

  else 
  {
    con.query(`update option_chosen set q_${ques_num} = ${input} where sch_id = ${schl}`, function (err, result, fields) {
      if (err) throw err;
      console.log(result.affectedRows);
    });
        
    con.query(`SELECT * FROM option_chosen where sch_id = ${schl}`, function (err, result, fields) {
      if (err) throw err;
      check = result;
    });
  }
  res.end();
});

app.post("/request", (req, res) => {
  res.json([{
    name_recieved: 'Arnav',
    password: pass
  }])
  res.end();
})

app.post("/school_id", (req, res) => {
  schl = (Number(req.body.sch_id) + 1);
  res.end();
})

app.post("/school_type", (req, res) => {
  con.query(`select * from school_info`, function (err, result, fields) {
    if (err) throw err;
    info = result;
  });

  con.query(`select * from view_passcode`, function (err, result, fields) {
    if (err) throw err;
    pswd = result;
  });

  res.json([{
    school_info: info,
    password: pswd
  }])
  res.end();
})

app.post("/clear", (req, res) => {
  con.query(`update option_chosen set q_${ques_num} = null where sch_id = ${schl}`, function (err, result, fields) {
    if (err) throw err;
    console.log(result.affectedRows);
  });
  res.end();
})

app.post("/review", (req, res) => {
  con.query(`SELECT * FROM option_chosen where sch_id = ${schl}`, function (err, result, fields) {
    if (err) throw err;
    review = result;
    res.json([{
      rev: review,
      question: ques
    }])
    res.end();
  });
})

app.post("/questions_request", (req, res) => {
  ques_num = req.body.ques_num;
  con.query(`SELECT * FROM option_chosen where sch_id = ${schl}`, function (err, result, fields) {
    if (err) throw err;
    check = result;
    
    res.json([{
      questions: ques,
      checkk: check
    }]);
    res.end();
  });


})

app.get('/setb', (req, res) => {
  con.query(`select * from v1`, function (err, result, fields) {
    if (err) throw err;
    con.query(`select * from questions`, function (err, qresult, fields) {
      if (err) throw err;
      con.query(`select * from v2`, function (err, v2, fields) {
        if (err) throw err;
        con.query(`select * from v3`, function (err, v3, fields) {
          if (err) throw err;
          con.query(`select * from v4`, function (err, v4, fields) {
            if (err) throw err;
            con.query(`select * from v5`, function (err, v5, fields) {
              if (err) throw err;
              con.query(`select * from v6`, function (err, v6, fields) {
                if (err) throw err;
                con.query(`select * from v7`, function (err, v7, fields) {
                  if (err) throw err;
                  con.query(`select * from v8`, function (err, v8, fields) {
                    if (err) throw err;
                    con.query(`select * from v9`, function (err, v9, fields) {
                      if (err) throw err;
                      con.query(`select * from v10`, function (err, v10, fields) {
                        if (err) throw err;
                        con.query(`select * from v11`, function (err, v11, fields) {
                          if (err) throw err;
                          res.render('setb', {data: result, ques: [0,1,2,3,4,5,6,7,8,9], questions: qresult, varr:[v2, v3, v4, v5, v6, v7, v8, v9, v10, v11]});
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
})

app.listen(5000, () => {
console.log(`server is running at 5000`);
});

