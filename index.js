import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { MongoClient } from 'mongodb'

import usersRoutes from './routes/users.js'

const app = express();
const port = 5000;

const connectionURL = 'mongodb+srv://victor:victortnguyen@practice.epgjs.mongodb.net/test?retryWrites=true&w=majority';

MongoClient.connect(connectionURL, (err, client) => {
  const db = client.db('test');//connection to database

  //connect to collection
  db.collection('users').find().toArray((err, result) => { 
    if (err) throw err

    console.log(result)
  })
})

//set up external middleware
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/people', usersRoutes);
// Create a middleware function that executes on all HTTP METHOD TYPES under the path of '/things'.
// The middleware should console the type of the http method that was used and forward to action the the next thing.

app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`));

