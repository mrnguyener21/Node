import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';

import usersRoutes from './routes/users.js'
import addressRoutes from './routes/address.js'

const app = express();
const port = 5000;

const connectionURL = 'mongodb+srv://victor:victortnguyen@practice.epgjs.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`)))
  .catch((error) => console.log(`${error} did not connect`));

app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req, res) => {
    res.send('Hello')
});

app.use('/users', usersRoutes);
app.use('/addresses', addressRoutes);