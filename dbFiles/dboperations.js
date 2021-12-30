
// const express = require('express');
// const req = require('express/lib/request');
// const app = express();
// const PORT = 1433
// const sql = require('mssql');
// var config = require('./dbconfig');
// async function getOrder(){
//     try{  
//         sql.on('error', err => {
//             // ... error handler
//         })

//         sql.connect(config).then(pool => {
//             // Query

//             return pool.request()

//                 .query('SELECT Top 5 PbsPatNam , PbsSurNam FROM PbsInf;')
//         }).then(result => {
//             console.dir(result)
//         }).catch(err => {
//           // ... error checks
//           console.log(err)
//         });
//     }
//     catch (error){
//         console.log(error); 
//     }
// }

// app.get('/',(req,res) =>{
//     res.send('hello')
// })

// app.listen(PORT,()=>{
//     console.log("server running "+PORT)
// })

// module.exports = {
//     getOrder : getOrder
// }

const config = require('./dbconfig'),
    sql = require('mssql');

const getDatacustomer = async () => {
    try {
        let pool = await sql.connect(config);
        // let datacustomer = pool.request().query("SELECT Top 5 PbsPatNam , PbsSurNam FROM PbsInf")
        //let datacustomer = pool.request().query("SELECT* FROM PbsInf")
        let datacustomer = pool.request().query("SELECT PbsChtNum, PbsPatNam,PbsSurNam  FROM PbsInf")
        console.log(datacustomer);
        return datacustomer;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getDatacustomer
}