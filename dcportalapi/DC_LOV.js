const oracledb = require('oracledb');
const Promise = require("bluebird");

var password = 'Tm1m5u5R' 
module.exports = function (app) {
  

    const callapi = app.get('/api/DC_LOV',(req,res)=>{

      type = req.query.type
      

     


        async function makeConnection() {
        try {
          connection = await oracledb.getConnection({
              user: "TMIMS",
              password: password,
              connectString: "127.0.0.1:1521/BQMDEV"
              //connectString: "10.54.8.162:1521/BQMDEV"
          });
          console.log('connected to database');
        } catch (err) {
          console.error(err.message);
        } finally {
          if (connection) {
           
           

            var query1p =  connection.execute(

                `select * from DC_LOV_VIEW t where LOV_NAME='`+type+`' `,
                [],  
               
                );

              

                Promise.join(query1p).spread(function (result){

            

                  res.status(200).send(result.rows);
                 // return connection.close();
                })
                .catch(function (err){
                  console.log(err.message);
                  //return connection.close();
                });
             
              }
              
            
          }
        
        }
            

          makeConnection()
        
            })
          
      
          
        
        }