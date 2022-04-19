
var sql = require('../services/sql');
var machine = require('os').hostname;
var name = machine();


const main = async (req, res) => {
    try {
        const str = "SELECT * FROM `test_table` WHERE `name`='" + name + "';";
        let rows = await sql.query(str);

        if (rows.length) {
            var str2 = "UPDATE `test_table` SET `counter`=`counter`+1 WHERE `id`=" + rows[0].id;
        } else {
            var str2 = "INSERT INTO `test_table`( `name`) VALUES ('" + name + "')";
        }

        rows = await sql.query(str2);
        console.log(rows);
        res.render('index', { title: 'Laguna' });

    } catch (e) {
        console.log("ERROR", e);
        res.status(404);
    }
}


const random = (req, res) => {
    res.status(200).send({ data: Math.random() })
}

module.exports = { random, main }