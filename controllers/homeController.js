const router = require('express').Router();

router.get('/', (req, res) => {

    res.render('home', {errors: {}});
});


module.exports = router;