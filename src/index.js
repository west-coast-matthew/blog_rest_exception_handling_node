const express = require('express');
// const service1 = require('./service/service1.service');
//const service2 = require('./service/service2.service');
// const service3 = require('./service/service3.service');
const validateEntity = require('./service/validation.service');
const makeApiCall = require('./service/make-api-call.service');
const findEntity = require('./service/find-entity.service');

const errorHandlerMiddleware = require('./middleware/exception-handler.middleware');

const testMiddleware = function(err, request, response, next){
    console.log('AAAAAAAA'+ request.originalUrl);
    next();
  };

  const testMiddleware2 = (err, request, response, next)=> {
    console.log('BBB'+ request.originalUrl);
    next();
  };

const app = express();

app.use (function (rerr,eq, res, next) {
    console.log ("inside middleware");
    next();
  });


app.get('/example/validationFail',(req, res)=>{
    validateEntity({});
});
    console.log(`...`);

app.get('/example/systemException',(req, res)=>{
    makeApiCall({});
});

app.get('/example/notFoundException',(req, res)=>{
    findEntity(100);
});

app.use(errorHandlerMiddleware);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});