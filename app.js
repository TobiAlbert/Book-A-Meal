import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';

const PORT = process.env.PORT || 5050;

// Set up express app
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(routes);

app.listen(PORT, () => {
    console.log(`now listening on port ${PORT}`);
})