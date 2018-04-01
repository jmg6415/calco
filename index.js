exports.handler = (event, context, callback) => {
    // TODO implement
  //  callback(null, 'Hello from Lambda');
  
        let min = 0;
        let max = 10;
        
        let result = Math.floor(Math.random() * (max - min));
 //       Math.random()*(max - min)) + min
        callback(null, result);
        
};