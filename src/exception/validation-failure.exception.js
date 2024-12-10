/**
 * Responsible for representings where invalid data has been submitted 
 * by a client. For example a customer with a missing value for thier 
 * first name, etc.
 */
class ValidationException extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationException';
    }
  };

//  ValidationException.prototype = 

  module.exports = ValidationException;