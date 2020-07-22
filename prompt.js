// Creating a commandline interface with node
/// <reference types="prompt" />
var prompt = require('prompt'); // remember to npm install prompt
var colors = require("colors/safe"); // enables colored text display!!

prompt.start();
// Each object in the list represents a question the user will be asked
// Description: What the user sees
// Name: The key that the user's input will be stored in, within the result object
// Required: If true then this question will be looped if the user tries to proceed without input
prompt.get(
    [{
        description: colors.magenta('What is your name? '),
        name: 'name',
        required: true
    },{
        description: 'Are you sure? ',
        name: 'name_confirmed',
        default: 'no',
        required: true
    },{
        description: 'What year is it? ',
        name: 'year',
        required: true,
    },{
        description: 'Where are you? ',
        name: 'location',
        required: false
    }
], function (err, result) {
        console.log('Full results: '+JSON.stringify(result));

});
