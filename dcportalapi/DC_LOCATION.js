const oracledb = require('oracledb');
var password = 'Tm1m5u5R' 
module.exports = function (app) {

    const callapi = app.get('/api/location',(req,res)=>{

        async function makeConnection() {
        try {
          connection = await oracledb.getConnection({
              user: "TMIMS",
              password: password,
              connectString: "127.0.0.1:1521/BQMDEV"
          });
          console.log('connected to database');
        } catch (err) {
          console.error(err.message);
        } finally {
          if (connection) {
           
           
              connection.execute(
                `SELECT *
                 FROM DC_LOCATION`,
                [],  
               function(err, result) {
                  if (err) {
                    console.error(err.message);
                    return;
                  }
                  console.log(result.rows);
                  res.send(result);
               });
              }
            }
          } 
            
          makeConnection()
        
      
          
      
       
      })
      
      
}