const mongoose = require('mongoose');


const auctonSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [4, 'Title should be minimum 4 characters long!']
    }, 
    description: {
        type: String,
        required: true,
        maxLength: [200, 'The description should be a maximum of 200 characters long!'],
    },
    category: {
        type: String,
        required: true,
        enum: {
            value: ['Vehicles', 'Real Estate', 'Electronics', 'Furniture', 'Other'],
            message: 'Invalid category!'
        }
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        min: [1, 'Price cannot be a negative number!']
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    bidders: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

