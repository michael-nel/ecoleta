import express from 'express';
const app = express();
app.get('/users',  (request, response) => {
    response.json("Hello World");
});

app.listen(3333);
