class ServerErrorException extends Error {
    constructor(message) {
      super(message);
      this.name = 'ServerErrorException';
    }
  };

  module.exports = ServerErrorException;