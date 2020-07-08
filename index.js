const express = require('express');
const { response } = require('express');
const app = express()
const port = 5000;
const bodyParser = require('body-parser');

// Use UUID which we talked about while doing redux.
// Add a unique ID to each created user before it's added to the "database"

// Make a delete route to /people/:id
// and remove that user from the "database" - hint db is an array, so just remove it normally.

app.use(bodyParser.json());

const users = [];

app.get('/', (request, response) => {
    console.log('Reached Route /');
    
    response.send('Hello Bobby!');
});

app.post('/person', (req, res) => {   
    const user = req.body;

    users.push(user);
    
    console.log(`User [${user.username}] added to the database.`);
});

app.get('/people', (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
});

app.delete('/people', (req, res) => {
    
})

app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`));