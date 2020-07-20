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
    const callapi = app.post('/api/DC_NETWORK_PORT_CREATE',(req,res)=>{

      
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
           
           

            var query1p =  connection.execute(

                `insert into dc_network_port(
                    PORT_NTW_ID,
                    PORT_NO,
                    PORT_SITE_ID,
                    PORT_NTW_TYPE,
                    PORT_CAB_PRELAID,
                    PORT_STATUS,
                    PORT_DESC,
                    PORT_SWITCH_NAME,
                    PORT_COMM_DT,
                    PORT_DECOMM_DT,
                    PORT_CREATED_BY
                    )values
                    (
                    (select ntw_id from dc_bandwidth where ntw_name='`+result['NTW_NAME']+`'),
                    '`+result['PORT_NO']+`',
                    (select site_id from dc_site where site_name='`+result['SITE_NAME']+`'),
                    '`+result['PORT_NTW_TYPE']+`',
                    '`+result['PORT_CAB_PRELAID']+`',
                    '`+result['PORT_STATUS']+`',
                    '`+result['PORT_DESC']+`',
                    '`+result['PORT_SWITCH_NAME']+`',
                    to_date('`+result['PORT_COMM_DT']+`','DD/MM/YYYY'), 
                    to_date('`+result['PORT_DECOMM_DT']+`','DD/MM/YYYY'),
                    '`+result['PORT_CREATED_BY']+`'
                    )` ,
                [],  
               
                );

                Promise.join(query1p).spread(function (result){

            
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