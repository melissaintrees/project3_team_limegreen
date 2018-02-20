const router = require("express").Router();
const users = require("../api/log-in.js");

// Matches with "/api/questions"
router.route("/")
  .get((req, res) => res.send('Hello World'));

// Matches with "/api/questions/:id"
router.post("/api/login", function(req, res) {
    console.log(req.body.username);
    users(req.body.username, req.body.password, cb, res);
});

function cb(result, res, userName){
    let token = false;

    if(result){
      let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: userName,
      }, 'WeAreSparTans');
      res.send(token);
    }
    else{
      console.log('Log in Failed')
      res.send(token);
    }
}

function verify(token){
  let decoded = jwt.verify(token, 'WeAreSparTans');
  console.log(decoded);
}


module.exports = router;
