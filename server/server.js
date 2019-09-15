const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo.router.js');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/list', todoRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('server up on: ', PORT);
})
