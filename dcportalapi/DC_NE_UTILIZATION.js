const oracledb = require('oracledb');
const Promise = require("bluebird");

var password = 'Tm1m5u5R' 
module.exports = function (app) {
  

    const callapi = app.get('/api/DC_NE_UTILIZATION',(req,res)=>{

      siteName = req.query.siteName
      

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

                `select (select count(*) from dc_rack d2 where d2.rack_site_id=d.rack_site_id and d2.rack_status='Unoccupied' group by rack_site_id)rack_utilized,
                (select count(*) from dc_rack d3 where d3.rack_site_id=d.rack_site_id and d3.rack_status='Registered' group by rack_site_id)rack_available,
                count(*) as total_rack,
                (select round(count(*)*100 / (select count(*) from dc_rack d4 where d4.rack_site_id=d.rack_site_id group by rack_site_id)) from dc_rack d2 where d2.rack_site_id=d.rack_site_id and d2.rack_status='Unoccupied' group by rack_site_id)rack_utilization
                from dc_rack d
                where d.rack_site_id=(select S.SITE_ID from dc_site s where s.site_name= `+ sitename + ' group by rack_site_id',
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