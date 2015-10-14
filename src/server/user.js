var pg = require('pg');
var conString = "postgres://postgres@localhost:5432/angularsite";

module.exports = {
    getUser: getUser,
    addUser: addUser
};

function getUser(req, res) {
    var results = [];

    // Get a Postgres client from the connection pool
    pg.connect(conString, function (err, client, done) {
        // Handle connection errors
        if (err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM items ORDER BY id ASC;");

        // Stream results back one row at a time
        query.on('row', function (row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            done();
            return res.json(results);
        });

    });
}

function addUser(req, res) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            res.status(500).send(err);
            done();
            return;
        }
        client.query(({text: "INSERT INTO items(id, password) values($1, $2)",
                              values: [
                              req.body.id,
                              req.body.password]}),
            function (err) {
                if (err) {
                    res.status(500).send(err);
                    done();
                    return;
                }
                else {
                    res.status(201).send();
                    done();
                    return;
                }
            });
    });
}
