var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/patient_register', function (req, res, next) {
    res.render('patient_register', {
        title: 'Patient Signup'
    });
});

router.get('/login', function (req, res, next) {
    res.render('login', {
        title: 'Login'
    });
});

module.exports = router;