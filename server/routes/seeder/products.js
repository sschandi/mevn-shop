const express = require('express');
const router = express.Router();
const faker = require('faker');
const Product = require('../../models/Product');
const Category = require('../../models/Category');

router.get('/', function (req, res, next) {
    const categories = ["Baby", "Movies", "Shoes", "Books", "Electronics","Computers", "Kids"];
    const images = ["https://cdn.pixabay.com/photo/2018/04/23/14/23/giraffe-3344366_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/05/13/10/13/sky-3395811_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/04/12/18/13/sunset-3314275_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/01/20/14/26/panorama-3094696_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/05/15/23/02/football-3404535_960_720.jpg",
                    "https://cdn.pixabay.com/photo/2018/04/29/01/15/coast-3358820_960_720.jpg"
                ];
    for (let i = 0; i < 40; i++) {
        let product = new Product({
            name : faker.commerce.productName(),
            price : faker.commerce.price(),
            category: categories[Math.floor(Math.random() * categories.length)],
            description : faker.lorem.paragraph(),
            image: images[Math.floor(Math.random() * images.length)]
        });
        
        product.save();
    }
    for (let i = 0; i < categories.length; i++) {
        let cat = new Category({
            title: categories[i]
        });
        cat.save();
    }
    res.redirect('/')
});


module.exports = router;