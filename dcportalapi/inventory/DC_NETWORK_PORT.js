const oracledb = require('oracledb');
const Promise = require("bluebird");

var password = 'Tm1m5u5R' 
module.exports = function (app) {
  

    const callapi = app.get('/api/DC_NETWORK_PORT',(req,res)=>{

     

      site = req.query.site;
      
     
       
      
      if (site != null) {
        query1=" where PORT_SITE_ID in (select site_id from dc_site where site_name='"+site+"')";
        } 
        else{
          query1="";
        };


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

                `SELECT 
                PORT_ID,
                (select ntw_name from dc_bandwidth where ntw_id=PORT_NTW_ID) as ntw_name,
                PORT_NO,
                (select site_name from dc_site where site_id=PORT_SITE_ID) as site_name,
                PORT_NTW_TYPE,
                PORT_CAB_PRELAID,
                PORT_STATUS,
                PORT_DESC,
                PORT_SERVICEID,
                PORT_SWITCH_NAME,
                (select cusr_name from dc_customer where cusr_id=PORT_CUSR_ID) as customer_name,
                PORT_BANDWIDTH,
                to_char(PORT_CREATED_DT,'dd/mm/yyyy hh:mi:ss am') as PORT_CREATED_DT,
                PORT_CREATED_BY,
                to_char(PORT_UPDATED_DT,'dd/mm/yyyy hh:mi:ss am') as PORT_UPDATED_DT,
                PORT_UPDATED_BY,
                to_char(PORT_COMM_DT,'dd/mm/yyyy hh:mi:ss am') as PORT_COMM_DT,
                to_char(PORT_DECOMM_DT,'dd/mm/yyyy hh:mi:ss am') as PORT_DECOMM_DT
                FROM DC_NETWORK_PORT  `+ query1 ,
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