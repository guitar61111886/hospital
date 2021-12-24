
const sql = require('mssql');
var config = require('./dbconfig');
async function getOrder(){
    try{  
        sql.on('error', err => {
            // ... error handler
        })
       
        sql.connect(config).then(pool => {
            // Query
            
            return pool.request()
             
                .query('SELECT Top 5 PbsPatNam , PbsSurNam FROM PbsInf;')
        }).then(result => {
            console.dir(result)
        }).catch(err => {
          // ... error checks
          console.log(err)
        });
    }
    catch (error){
        console.log(error); 
    }
}

module.exports = {
    getOrder : getOrder
}
