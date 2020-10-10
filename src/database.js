const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aldebaran28@',
    database: 'dbpruebas',
    multipleStatements: true

});

mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('DB is connectd');
    }
});

module.exports = mysqlConnection;