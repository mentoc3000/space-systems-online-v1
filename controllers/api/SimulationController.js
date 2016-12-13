var express = require('express');
var router = express.Router();
var simService = require('../../services/SimulationService');

// routes
router.post('/submit', submit);

module.exports = router;

function submit(req, res) {
   simService.reverse(req.body.input)
      .then(function(output){
         if (output) {
            res.send(output);
         } else {
            res.sendStatus(404);
         }
      })
      .catch(function(err) {
         res.status(404).send(err);
      });
}
