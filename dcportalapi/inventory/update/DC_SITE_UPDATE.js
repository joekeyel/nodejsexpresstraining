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
    const callapi = app.post('/api/DC_SITE_UPDATE',(req,res)=>{

      
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
                  dc_hosting.site_update(s_id => '`+result['SITE_ID']+`',
                                         s_name => '`+result['SITE_NAME']+`',
                                         a_no => '`+result['ADDE_NO']+`',
                                         a_floor => '`+result['ADDE_FLOOR']+`',
                                         a_building => '`+result['ADDE_BUILDING']+`',
                                         a_sttype => '`+result['ADDE_STTYPE']+`',
                                         a_stname => '`+result['ADDE_STNAME']+`',
                                         a_postcode => '`+result['ADDE_POSTCODE']+`',
                                         a_section =>  '`+result['ADDE_SECTION']+`',
                                         a_city => '`+result['ADDE_CITY']+`',
                                         a_state => '`+result['ADDE_STATE']+`',
                                         s_desc => '`+result['SITE_DESC']+`',
                                         s_mgr => '`+result['SITE_MGR']+`',
                                         s_mgr_no => '`+result['SITE_MGR_NO']+`',
                                         s_status => '`+result['SITE_STATUS']+`',
                                         s_total_space_cap => '`+result['SITE_TOTAL_SPACE_CAP']+`',
                                         s_total_power_cap => '`+result['SITE_TOTAL_POWER_CAP']+`',
                                         s_verified_by => '`+result['SITE_VERIFIED_BY']+`',
                                         s_updated_by => '`+result['SITE_UPDATED_BY']+`',
                                         s_comm_dt => to_date('`+result['SITE_COMM_DT']+`','DD/MM/YYYY'),
                                         s_decomm_dt => to_date('`+result['SITE_DECOMM_DT']+`','DD/MM/YYYY'),
                                         s_workgroup => '`+result['SITE_WORKGROUP']+`',
                                         s_verified_tag => '`+result['SITE_VERIFIED_TAG']+`',
                                         err_message => err_msg);
                end;` ,
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