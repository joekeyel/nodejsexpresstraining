const oracledb = require('oracledb');
const Promise = require("bluebird");
const bodyParser = require('body-parser')



var password = 'Tm1m5u5R' 
module.exports = function (app) {
   
  // parse application/x-www-form-urlencoded

  app.use(bodyParser.urlencoded({
    extended: true
  }));
 // app.use(bodyParser.text({ type: 'text/html' }))
    const callapi = app.post('/api/DC_NETWORK_PORT_DELETE',(req,res)=>{

      
     // res.send(req.body)
     result = req.body
     console.log(req.body)

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
           
           
//test
            var query1p =  connection.execute(

                `delete from DC_NETWORK_PORT
                where port_id='`+result['PORT_ID']+`'` ,
                [],  
               
                );

               

                Promise.join(query1p).spread(function (){

                  res.status(200).send("success");
                  console.log(req.body)
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
     
      
     } )
          
      
          
        
      }