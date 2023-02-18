const router = require('express').Router();
const { getErrorMessage } = require('../utils/errorUtils');
const auctionService = require('../services/auctionService');


router.get('/create', (req, res) => {

    res.render('auction/create');
});


router.post('/create', async (req, res)=> {
    const {title, category, image, price, description } = req.body;

    const userId = req.user._id;

    try {

        await auctionService.create(userId,{title: title, description: description, category: category, image: image, price: price});

        res.redirect('/')

    } catch(error){
        res.status(404).render('auction/create', {error: getErrorMessage(error)})
    }
});


module.exports = router;