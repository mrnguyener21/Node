import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'

//index.js is for the setup while separtae files are for specific logic path

const app = express();
const port = 5000;

var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

app.use(bodyParser.json());

app.use('/people', usersRoutes);
 
app.get('/', (request, response) => {  
    console.log('Reached Route /');
    
    response.send('Social Media App');
});

app.post('*', (req, res) => {
    console.log('YOU TRIED DOING SOMETHING WITH A ROUTE THAT DOESNT EXIST');
})

app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`));


