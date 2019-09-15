const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let queryText = `DELETE FROM "list" WHERE "id" = $1;`;
    pool.query(queryText, [id]).then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "list" ORDER BY "complete" ASC, "id" DESC;';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error getting list', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    let newTask = req.body;
    console.log('Adding task', newTask);
    let queryText = `INSERT INTO "list" ("task")
                     VALUES ($1);`;
    pool.query(queryText, [newTask.task]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error adding new task', error);
        res.sendStatus(500);
    })
});

router.put('/complete/:id', (req, res) => {
    let id = req.params.id;
    let queryText = `UPDATE "list" SET "complete" = '1' WHERE "id" = $1;`;
    pool.query(queryText, [id]).then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in complete', error);
        res.sendStatus(500);
    })
})

module.exports = router;