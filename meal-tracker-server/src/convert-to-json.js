const fs = require('fs');  //saves the need to use babel for using basic node CLI
const recipes = require('./fake-data');  //where to gather data

const FILE_NAME = 'recipes.json';  //output file

fs.writeFileSync(
    FILE_NAME,
    JSON.stringify(recipes),  //file to be converted
    'utf-8'  //encoding method
);

console.log('JSONified!');