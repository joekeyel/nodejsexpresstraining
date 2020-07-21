const oracledb = require('oracledb');
const Promise = require("bluebird");

var password = 'Tm1m5u5R' 
module.exports = function (app) {
  

    const callapi = app.get('/api/DC_LOCATION',(req,res)=>{

    
      site = req.query.site;
      locn_id = req.query.locn_id;
      location = req.query.location;


      if (site != null && location != null) {
        query1="where locn_site_id=(select site_id from dc_site where site_name='"+site+"')" +
          "and locn_name='"+location+"'";
        } 
        else if (site != null && location == null) {
        query1="where locn_site_id=(select site_id from dc_site where site_name='"+site+"')";
        }  
        else if (site == null && location!=null) {
        query1="where locn_name='"+location+"'";
        }
        else if (locn_id != null) {
        query1="where locn_id='"+locn_id+"'";
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
    
            oracledb.fetchAsString = [ oracledb.CLOB ];
            var query1p =  connection.execute(

                `select 
                LOCN_ID,
                LOCN_NAME,
                (select site_name from dc_site where site_id=LOCN_SITE_ID) as SITE_NAME,
                LOCN_TYPE,
                LOCN_SPACE_CAPACITY,
                LOCN_STATE,
                LOCN_STATUS,
                LOCN_DESC,
                to_char(LOCN_CREATED_DT,'dd/mm/yyyy hh:mi:ss am') as LOCN_CREATED_DT,
                LOCN_CREATED_BY,
                LOCN_SPACE_UTILIZATION,
                LOCN_SPACE_AVAILABLE,
                to_char(LOCN_COMM_DT,'MM/dd/yyyy') as LOCN_COMM_DT,
                to_char(LOCN_DECOMM_DT,'MM/dd/yyyy') as LOCN_DECOMM_DT,
                to_char(LOCN_COMM_DT,'dd/mm/yyyy hh:mi:ss am') as LOCN_COMM_DT_V,
                to_char(LOCN_DECOMM_DT,'dd/mm/yyyy hh:mi:ss am') as LOCN_DECOMM_DT_V,
                to_char(LOCN_UPDATED_DT,'dd/mm/yyyy hh:mi:ss am') as LOCN_UPDATED_DT,
                (SELECT atth_file from dc_attachment WHERE atth_type='FLOOR_PLAN' and atth_tablename='DC_LOCATION' and atth_foreignid=t.locn_id) as FLOOR_PLAN,
                (SELECT atth_filename from dc_attachment WHERE atth_type='FLOOR_PLAN' and atth_tablename='DC_LOCATION' and atth_foreignid=t.locn_id) as LOCN_FLOORPLAN_FILENAME,
                (SELECT atth_filesize from dc_attachment WHERE atth_type='FLOOR_PLAN' and atth_tablename='DC_LOCATION' and atth_foreignid=t.locn_id) as LOCN_FLOORPLAN_FILESIZE,
                (SELECT atth_file from dc_attachment WHERE atth_type='RACK_UTILIZATION' and atth_tablename='DC_LOCATION' and atth_foreignid=t.locn_id) as RACK_UTILIZATION,
                (SELECT atth_filename from dc_attachment WHERE atth_type='RACK_UTILIZATION' and atth_tablename='DC_LOCATION' and atth_foreignid=t.locn_id) as LOCN_RACK_UTIL_FILENAME,
                (SELECT atth_filesize from dc_attachment WHERE atth_type='RACK_UTILIZATION' and atth_tablename='DC_LOCATION' and atth_foreignid=t.locn_id) as LOCN_RACK_UTIL_FILESIZE,
                LOCN_UPDATED_BY
                from DC_Location t `+ query1 +`` ,
                [],
                // (err,results)=>{
                //     //console.log(results.rows[0]['LOCN_FLOORPLAN_BLOB']);
                
                //     if (results.rows.length)
                //     {
                //         var clob = results.rows[0]['LOCN_FLOORPLAN_BLOB'];
                //         //var inn = clob.getAsciiStream();
                //         //var w = new StringWriter();
                //         //IOUtils.copy(inn, w);
                //         //var Pic2 = w.toString();
                //         console.log('inn',clob);
                
                //     }
                // }

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
