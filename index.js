const errou = require('faustao-errou');

module.exports = function(result){
    if(!result.success)
        errou();
}
