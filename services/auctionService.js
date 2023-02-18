const Auction = require('../models/Auction');



exports.create = (userId, { title, description, category, image, price }) => Auction.create({ title, description, category, image, price, author: userId });

