import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';

import router from './router';

const app = express();

app.use(express.static(__dirname + '/../public'));
app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', router);

export default app;
