var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function (req, res) {
    res.json([{name:"Thanh", age:"24", gender:"male"}, {name:"Kenneth", age:"24", gender:"male"}]);
});

app.use('/api/user', router);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

