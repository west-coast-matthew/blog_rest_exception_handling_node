
/**
 * An example a wrapper for a third party API where we broadcast exeptions 
 * to such as pager duty to handle (email or sms test the appropriate user).
 * 
 * Providing this level of abstraction allows us to manage migrations from future
 * third party providers in an isolated manner.
 * 
 * @param {*} msg 
 */
const reportError = (msg) => {

};

modules.exports = reportError;