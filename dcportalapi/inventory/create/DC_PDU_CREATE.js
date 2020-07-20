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
    const callapi = app.post('/api/DC_PDU_CREATE',(req,res)=>{

      
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

                `declare
                err_msg varchar2(1000);
                begin
                  dc_hosting.pdu_insert(p_name => '`+result['PDU_NAME']+`',
                                        p_site_name => '`+result['SITE_NAME']+`',
                                        p_locn_name => '`+result['LOCN_NAME']+`',
                                        p_code => '`+result['PDU_CODE']+`',
                                        p_fuse => '`+result['PDU_FUSE']+`',
                                        p_user_rack => '`+result['PDU_USER_RACK']+`',
                                        p_status => '`+result['PDU_STATUS']+`',
                                        p_desc => '`+result['PDU_DESC']+`',
                                        commissioned_Date => to_date('`+result['PDU_COMM_DT']+`','DD/MM/YYYY'), 
                                        decommissioned_Date => to_date('`+result['PDU_DECOMM_DT']+`','DD/MM/YYYY'),
                                        p_created_by => '`+result['PDU_CREATED_BY']+`',
                                        err_message => err_msg);
                end;` ,
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