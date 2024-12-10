const ServerErrorException = require('../exception/server-error.exception');

function makeApiCall(payload){
    // Emulate a validation level exception.
    try{
        throw ex;
    }
    catch(ex){
        throw new ServerErrorException("Something bad happeend making an api call....");
    }
}

module.exports = makeApiCall;