const express = require('express');
const app = express()
const port = 5000;

// A GET route to the / path and return hello bobby
app.get('/', (request, response) => {
    response.send('Hello bobby')
});

// A GET route to the /people path and return an h1 that says people    
app.get('/people', (request, response) => {
    console.log(response);

    // response.send(request);
});

app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`));

// NODEMON