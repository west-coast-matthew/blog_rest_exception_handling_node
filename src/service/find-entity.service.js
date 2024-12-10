const EntityNotFoundException = require('../exception/entity-not-found.exception');

const findEntity = (id)=>{

    // Emulate exception

    try{
        throw new Error("Bummer!");
    }
    catch(ex){
        throw new EntityNotFoundException(`Cannot find entity with pk '${id}'`);
    }
}

module.exports = {findEntity};