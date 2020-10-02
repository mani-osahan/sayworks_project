const express = require('express');
const myssh = require('mysql-ssh');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');


const pool = myssh.connect(
    {
        host: '198.211.114.164',
        user: 'sayworks',
        privateKey: fs.readFileSync("C:\\Users\\Mani's Rig\\Documents\\College\\Term 6\\Sayworks project\\rsa_file\\id-rsa"),
        passphrase: 'guraijj4'
    },
    {
        host: '127.0.0.1',
        user: 'dbuser',
        password: 'guraijj4',
        database: 'Sayworks'
    }
);

app.connect(function (err) {
    if (err) throw err
    console.log('You are now connected with mysql database')
})

app.use(bodyParser.json());         // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

const server = app.listen(3001, "127.0.0.1", function (){
    const host = server.address().address
    const port = server.address().port
    console.log('App runnning on port http://%s:%s', host, port);
});

app.get('/search', function (request, response){

    response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    myssh._sql.query('SELECT * from jobs', (err, results, fields) => {
        if (err){
            return response.send(err);
        }else{
            return response.send(results);
        }
    })
})