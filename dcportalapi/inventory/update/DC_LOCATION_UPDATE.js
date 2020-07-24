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
    const callapi = app.post('/api/DC_LOCATION_UPDATE',(req,res)=>{

      
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

                `UPDATE DC_LOCATION SET 
                LOCN_NAME='`+result['LOCN_NAME']+`',
                LOCN_SITE_ID=(select site_id from dc_site where site_name='`+result['SITE_NAME']+`'),
                LOCN_TYPE='`+result['LOCN_TYPE']+`',
                LOCN_SPACE_CAPACITY='`+result['LOCN_SPACE_CAPACITY']+`',
                LOCN_STATE='`+result['LOCN_STATE']+`',
                LOCN_STATUS='`+result['LOCN_STATUS']+`',
                LOCN_DESC='`+result['LOCN_DESC']+`',
                LOCN_COMM_DT=to_date('`+result['LOCN_COMM_DT']+`','DD/MM/YYYY'),
                LOCN_DECOMM_DT=to_date('`+result['LOCN_DECOMM_DT']+`','DD/MM/YYYY'),
                LOCN_UPDATED_BY='`+result['LOCN_UPDATED_BY']+`',
                LOCN_UPDATED_DT=sysdate
                where 
                locn_id='`+result['LOCN_ID']+`'` ,
                [],  
               
                );

                var query2p =  connection.execute(

                    `delete from dc_attachment where 
                    ATTH_FOREIGNID='`+result['LOCN_ID']+`' 
                    and ATTH_TABLENAME='DC_LOCATION' 
                    and ATTH_TYPE='FLOOR_PLAN'` ,
                    [],  
                   
                    );

                    var query3p =  connection.execute(

                        `insert into dc_attachment(ATTH_ID,ATTH_TABLENAME,ATTH_TYPE,ATTH_FOREIGNID,ATTH_FILENAME,ATTH_FILESIZE,ATTH_FILE,ATTH_CREATED_BY,ATTH_CREATED_DT) values (DC_ATTH_ID_SEQ.NEXTVAL,'DC_LOCATION','FLOOR_PLAN',${result["LOCN_ID"]},${result["LOCN_FLOORPLAN_FILENAME"]},${result["LOCN_FLOORPLAN_FILESIZE"]},${result["LOCN_FLOORPLAN_BLOB"]},${result["LOCN_UPDATED_BY"]},sysdate)` ,
                        [],  
                       
                        );   

                    var query4p = connection.execute(
                        `delete from dc_attachment where 
                        ATTH_FOREIGNID='`+result['LOCN_ID']+`' 
                        and ATTH_TABLENAME='DC_LOCATION' 
                        and ATTH_TYPE='RACK_UTILIZATION'`
                    )   
                    
                    var query5p =  connection.execute(

                        `insert into dc_attachment(ATTH_ID,ATTH_TABLENAME,ATTH_TYPE,ATTH_FOREIGNID,ATTH_FILENAME,ATTH_FILESIZE,ATTH_FILE,ATTH_CREATED_BY,ATTH_CREATED_DT) values (DC_ATTH_ID_SEQ.NEXTVAL,'DC_LOCATION','RACK_UTILIZATION',${result["LOCN_ID"]},${result["LOCN_RACK_UTIL_FILENAME"]},${result["LOCN_RACK_UTIL_FILESIZE"]},${result["LOCN_RACK_UTIL_BLOB"]},${result["LOCN_UPDATED_BY"]},sysdate)` ,
                        [],  
                       
                        );  

                Promise.join(query1p,query2p,query3p,query4p,query5p).spread(function (){

            
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