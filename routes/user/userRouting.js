const router = require("express").Router();
const jwt = require('jsonwebtoken');
const users = require("../../controllers/logInController.js");
const newUser = require("../../controllers/registerController.js");

// Matches with "/api/questions"
router.route("/")
  .get((req, res) => res.send('Hello World'));

router.post("/login", function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);
    console.log(req.body.username);
    users(req.body.username, req.body.password, cb, res);
});

router.post("/signup", function(req, res) {
    console.log(req.body.username);
    console.log(req.body.password);
    newUser(req.body.username, req.body.password, cb, res);
  });

router.get("/userAccount/:token", function(req, res){
  verify(req.params.token);
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
    }
}

function verify(token){
  let decoded = jwt.verify(token, 'WeAreSparTans');
  console.log(decoded);
}


module.exports = router;
