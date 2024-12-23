import express from 'express';
import { routes } from './routes';
import { db } from './db';

const app = express();  //app server creation
app.use(express.json());  //body parser for POST requests

routes.forEach(route => {
    app[route.method]('/api' + route.path, route.handler); //add all the routes defined
});

const start = async() => {
    await db.connect('mongodb://localhost:27017');  //try to connect to the DB URL provided here (locally)
    await app.listen(8080);
    console.log('Server started and listen on 8080.');
}

start(); //call it because its an async