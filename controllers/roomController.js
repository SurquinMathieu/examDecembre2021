let Room = require('../models/roomModel');
let mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_rooms',
});

let roomsList = [];

exports.addRoom = function(request,response){
    response.render('addRoom.ejs')
}

exports.roomsList = function(request,response){
    roomsList = [];
    let piece = request.body.piece
    let longueur = request.body.longueur
    let largeur = request.body.largeur
    let infos_piece = {'name': piece, 'length':longueur, 'width': largeur}
    connection.query('insert INTO rooms SET ?',infos_piece,function(error,result){
        if (error){
            console.log(error)
        }
    })
    connection.query('SELECT * FROM rooms',function(error,result){
        if (error){
            console.log(error)
        }
        result.forEach(element => {
        let room = new Room(element.id,element.name,element.length,element.width);
        roomsList.push(room);
        })
        console.log(roomsList)
        response.render('roomsList.ejs',{rooms:roomsList})
    })
    
}