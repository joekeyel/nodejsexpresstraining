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
    const callapi = app.post('/api/DC_CRAC_CREATE',(req,res)=>{

      
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
                  dc_hosting.crac_insert(c_name => '`+result['CRAC_NAME']+`',
                                         c_site_name => '`+result['SITE_NAME']+`',
                                         c_locn_name => '`+result['LOCN_NAME']+`',
                                         c_area => '`+result['CRAC_AREA']+`',
                                         c_kw => `+result['CRAC_KW']+`,
                                         c_quantity => `+result['CRAC_QUANTITY']+`,
                                         c_cool_capacity => `+result['CRAC_COOL_CAPACITY']+`,
                                         c_brand => '`+result['CRAC_BRAND']+`',
                                         c_type => '`+result['CRAC_TYPE']+`',
                                         c_status => '`+result['CRAC_STATUS']+`',
                                         c_desc => '`+result['CRAC_DESC']+`',
                                         commissioned_date => to_date('`+result['CRAC_COMM_DT']+`','DD/MM/YYYY'),
                                         decommissioned_date => to_date('`+result['CRAC_DECOMM_DT']+`','DD/MM/YYYY'),
                                         c_created_by => '`+result['CRAC_CREATED_BY']+`',
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