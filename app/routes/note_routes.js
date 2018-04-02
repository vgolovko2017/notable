
'use strict';

let fs = require('fs');
let sqlString = require('sqlstring');

// global.TEST100 = "Hello100";
// console.log(module);

function incView(req) {
	if (typeof req.session.views === 'undefined') {
        req.session.views = 1;
	} else {
        req.session.views += 1;
	}

	console.log('Page view: ' + req.session.views);
}

function alreadyAuth(req) {
	if (typeof req.session.auth === 'undefined') {
		console.log('User not auth yet');
		return false;
	}

	console.log('User already auth');

	return true;
}

module.exports = (app, mysql, dbConfig) => {
    app.get('/', (req, res) => {
        incView(req);
		fs.readFile('index_notable.html', (err, data) => {
			if (err) {
				console.log(err.message);
				res.statusCode = 500;
				res.end("Internal server error");
            }
            else {
                console.log('Read index_notable.html complited.');
                res.end(data);
            }
		});
	});

    app.post('/auth/', (req, res) => {
		console.log(req.body);

		if (typeof req.body.checkAuth !== 'undefined') {
            console.log(req.session);
            if (alreadyAuth(req)) {
                res.send({status:"auth"});
			}
			else {
                res.send({status:"noauth"});
			}
		}
		else if (req.body.name && req.body.passwd) {
            let db = mysql.createConnection(dbConfig);
            db.connect((err) => {
                if (err)
                    throw err;

                console.log("Connected!");

                const sql = `select id from users where name = ? and password = PASSWORD(?) limit 1`;
                db.query(sql, [req.body.name, req.body.passwd], function (err, result) {
                    if (err) {
                        res.send({status: "error"});
                    }
                    else {
                        if (Object.keys(result).length == 1 && result[0].id) {
                            req.session.auth = 1;
                        	res.send({status: "authOk"});
                        } else {
                        	res.send({status: "authError"});
						}
                    }

                    db.end();
                });
            });
        }
        else {
            console.log("Incorrect input params in auth");
            res.send({status: "error"});
		}
    });

    app.post('/notes', (req, res) => {
		let db = mysql.createConnection(dbConfig);
		db.connect((err) => {
			if (err)
				throw err;

			console.log("Connected!");

			const sql = `INSERT INTO node_test (name, description, price) VALUES ('${req.body.name}', '${req.body.description}', '${req.body.price}')`;
			db.query(sql, function (err, result) {
				if (err) {
					res.send({status:"error"});
				}
				else {
					console.log("1 record inserted");
					res.send({status:"ok"});
				}
 
				db.end();
 			});
		});
	});

	app.get('/notes/', (req, res) => {
		let db = mysql.createConnection(dbConfig);
		db.connect((err) => {
			if (err)
				throw err;

			console.log("Connected!");

			const sql = "SELECT * FROM node_test";
			db.query(sql, (err, result, fields) => {
				if (err)
					res.send({status:"error"});
		
					// console.log(result);
        			res.send(result);

				db.end();
  			});
		});
	});

	app.post('/del', (req, res) => {
		let db = mysql.createConnection(dbConfig);

		db.connect((err) => {
			if (err)
				throw err;

			console.log("Connected!");

			const sql = `DELETE from node_test where id in (${req.body.items})`;
			db.query(sql, (err, result) => {
				if (err) {
					res.send({status:"error"});
				}
				else {
					console.log("1 record inserted");
					res.send({status:"ok"})
				}
 
				db.end();
 			});
		});
	});
};
