const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/',  (req, res) => {
    let newTask = req.body;
    console.log(`Adding task`, newTask);
    let queryText = `INSERT INTO "list" ("task")
                     VALUES ($1);`;
    pool.query(queryText, [newTask.task])
      .then((result) => {
        res.sendStatus(201);
      }).catch((error) => {
        console.log(`Error adding new task`, error);
        res.sendStatus(500);
      })
  });

module.exports = router;