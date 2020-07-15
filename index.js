import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import usersRoutes from './routes/users.js'

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cookieParser())

const cookies = (req, res, next) => {
    console.log('cookie', req.cookies);
    next()
}
app.use(cookies);

app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/people', usersRoutes);
// Create a middleware function that executes on all HTTP METHOD TYPES under the path of '/things'.
// The middleware should console the type of the http method that was used and forward to action the the next thing.

app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`));
