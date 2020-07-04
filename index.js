const express = require('express');
const { response } = require('express');
const app = express()
const port = 5000;

// A GET route to the / path and return hello bobby
app.get('/', (request, response) => {
    response.send('Hello bobby')
});

// get route to get a specific person

app.get('/*', (req, res) => {
    res.send('test')
    console.log('test');
})

// localhost:5000/users/25/books/1
app.get('/users/:userId/books/:bookId', (req, res) => {
    const { userId, bookId } = req.params;
    
    const usersDb = {
        25: 'Victor',
    }

    const bookDb = {
        1: 'Harry Potter',
    };

    res.send(`
        User: ${usersDb[userId]} is reading ${bookDb[bookId]}
    `);
});

app.get('/person', (req, res) => {
    res.send('person')
});


app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`));

// Frontend / Client <=> Backend / Server


// Route Paramateres