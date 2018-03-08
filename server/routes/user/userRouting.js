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
    console.log('we here')
    console.log(req.body.username);
    users(req.body.username, req.body.password, cb, res);
});

router.post("/signup", function(req, res) {
    console.log('here0');
    newUser(req.body.username, req.body.password, req.body.email, cbSignUp, res);
  });

router.get("/userAccount/:token", function(req, res){
  verify(req.params.token);
});

function cbSignUp(result){
  return result;
}

function cb(result, res, userName){
    let token = false;

    res.header('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);

    if(result){
      let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: userName,
      }, 'WeAreSparTans');
      console.log('Success')
      console.log(token);
      res.send(true);
    }
    else{
      console.log('Log in Failed')
      res.send(false);
    }
}

function verify(token){
  let decoded = jwt.verify(token, 'WeAreSparTans');
  console.log(decoded);
}


module.exports = router;
