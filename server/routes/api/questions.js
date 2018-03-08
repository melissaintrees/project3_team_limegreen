const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

// Matches with "/api/questions"
router.route("/")
  .get((req, res) => res.send('Hello World'));

// Matches with "/api/questions/:category"
router.get("/questions/:category", function(req, res){
  questionsController.categoryQ(req, res);
});

module.exports = router;
