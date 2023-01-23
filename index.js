const Client = require("./src/Client");


function Luna(token, options) {
    return new Client(token, options);
}

Luna.Client = Client;

// TODO: Literally everything else.