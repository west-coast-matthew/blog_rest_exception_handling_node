const ValidationException  = require('../exception/validation-failure.exception');

const validateEntity = (payload)=>{
    
    // Emulate a service level exception: i.e. third party SAAS API call fails, etc.
    console.log('');
    try{
        throw new Error("Sample exception!");
    }
    catch(e){
        throw new ValidationException(`Customer #1234 requires a value for the attribute 'first name'`);
    }
}

module.exports = validateEntity;