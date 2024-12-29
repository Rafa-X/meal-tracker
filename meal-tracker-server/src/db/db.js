import { MongoClient } from "mongodb";

const DB_NAME = 'meal-tracker';  //name of the database - change if necessary

//this will create a persistent MongoDB connection 
export const db = {  
    _dbClient: null,  //property to store the connection to MDB
    connect: async function(url) {  //take the url of the db to connect to
        const client = await MongoClient.connect(url, {
            maxPoolSize: 10,  //establish to have max 10 connections open
            //useNewUrlParser: true,  //compatibility properties
            //useUnifiedTopology: true,
        });

        this._dbClient = client;
    },
    getConnection: function() {  //will return the client connection only when called
        //called from inside routes and funcs to connect to the DB
        if (!this._dbClient){  //forgot to connect
            console.log('You need to call the connect function first.');
            process.exit(1);
        }

        //return the specified DB from the connection made
        return this._dbClient.db(DB_NAME);
    }
}