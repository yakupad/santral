var express = require('express');
var router = express.Router();
var movieModel = require('../schemes/Movie');

/* GET home page. */
router.route('/')
    .get(function (req, res, next) {
        res.status(200).json({
            status: 200,
            message: "Başarılı",
            data: req.params.id
        })
    }).post(function (req, res, next) {
        movieModel.create(req.body, (err, data) => {
            console.log(data);
            console.log(err);
        })
        res.status(201).json(req.body);
    }).put(function (req, res, next) {
        res.render('index', {
            title: 'Express'
        });
    })

    router.route('/:id')
    .get(function (req, res, next) {
        res.status(200).json({
            status: 200,
            message: "Başarılı",
            data: req.params.id
        })
    }).post(function (req, res, next) {
        res.status(201).json(req.body);
    }).put(function (req, res, next) {
        res.render('index', {
            title: 'Express'
        });
    })

module.exports = router;