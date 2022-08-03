const express = require('express');
const studentRouter = require('./router/students')

const app = express();
const port = 3000;

app.use(express.json())

app.use(studentRouter)

app.listen(port, () => {
    console.log(`Connection is at ${port}`);
})
