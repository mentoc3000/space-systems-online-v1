var express = require('express');
var router = express.Router();

router.get('/',function(req,res) {
   // log user out
   delete req.session.token;

   // redirect to previous page
   // var returnUrl = req.query.returnUrl && decodeURIComponent(req.requery.returnUrl) || '/';
   // res.redirect(returnUrl);
   res.redirect('/');
});

module.exports = router;
