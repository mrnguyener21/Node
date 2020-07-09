const express = require('express');
const { response } = require('express');
const bodyParser = require('body-parser');
const { v4: uuid } = require('uuid');
const app = express()
const port = 5000;

app.use(bodyParser.json());

let users = [];

app.get('/', (request, response) => {
    console.log('Reached Route /');
    
    response.send('Social Media App');
});

app.post('/person', (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User [${user.username}] added to the database.`);
});

app.get('/people', (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
});


app.get('/people/:id', (req, res) => {
    res.send(req.params.id)
});

app.delete('/people/:id', (req, res) => {
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
});

app.post('*', (req, res) => {
    console.log('YOU TRIED DOING SOMETHING WITH A ROUTE THAT DOESNT EXIST');
})

app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`));

app.patch('/people/:id', (req,res) => {
    // users = users.map((user) => {
    //     if (user.id === req.params.id) {
    //         user.age += 1;
    //     }

    //     return user;
    // });

    const user = users.find((user) => user.id === req.params.id);

    user.username = 'something'
    user.age = 25;
})

// 1	GET
// The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.

// 2	HEAD
// Same as GET, but it transfers the status line and the header section only.

// 3	POST
// A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.

// 4	PUT
// Replaces all the current representations of the target resource with the uploaded content.

// { USER } => { USER... }

// 5	DELETE
// Removes all the current representations of the target resource given by URI.

// 6	CONNECT
// Establishes a tunnel to the server identified by a given URI.

// 7	OPTIONS
// Describe the communication options for the target resource.

// 8	TRACE
// Performs a message loop back test along with the path to the target resource.

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH