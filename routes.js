let express = require('express');
let router = express.Router();

let roomController = require('./controllers/roomController')

router.get('/',roomController.addRoom)  //redirection vers la liste des formations
router.post('/showRooms',roomController.roomsList)
module.exports = router;