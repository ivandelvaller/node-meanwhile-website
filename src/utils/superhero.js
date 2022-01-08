const request = require('postman-request');

const superhero = (superheroName, callback) => {
    URL = 'https://superheroapi.com/api/2475262476099083/search/' + encodeURIComponent(superheroName);

    request({ url: URL, json: true }, (error, res) => {
        if(error) {
            callback('Unable to connect to the server.', undefined);
        } else if(res.body.response === 'error') {
            callback({ message: 'Invalid data.', error: res.body.error }, undefined);
        } else {
            callback(undefined, res.body);
        }
    });
};

module.exports = superhero;