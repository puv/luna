const Client = require("./src/Client.js");


function Luna(token, options) {
    return new Client(token, options);
}

Luna.Client = Client;

// TODO: Literally everything else.