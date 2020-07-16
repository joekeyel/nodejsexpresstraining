const oracledb = require('oracledb');
const Promise = require("bluebird");

var password = 'Tm1m5u5R' 
module.exports = function (app) {
  

    const callapi = app.get('/api/DC_PENDING_APPROVAL',(req,res)=>{

      userId = req.query.userid
      

      if (userId != null) {
        query1=" where userid='"+userId+"'";
        }else{
          query1="";
        }


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

                `select l.*,s.*,
                (TO_DATE(SYSDATE, 'DD-MM-YY') - TO_DATE(s.site_created_dt, 'DD-MM-YY'))aging,
                (select count(*) from dc_site s2,dc_inboxlist l2 where s2.site_id=l2.foreign_id and s2.site_verified_tag='N' and rownum=1 group by l2.userid) pendingApproval 
                from dc_inboxlist l
                join dc_site s on s.site_id=l.foreign_id `+ query1,
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