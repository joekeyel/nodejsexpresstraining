const authorizeToken = require('../../authorizeToken')
const oracledb = require('oracledb');
//require('dotenv').config()

var password = process.env.oraclePwd 


module.exports = function (app) {

 
  
    const dc_cage = app.get('/api/DC_CAGE/',authorizeToken,(req,res)=>{

        let location = req.query.location
        let site  = req.query.site
        let query1 = ""
      
      
        if (site != null && location!=null) {
          query1=" where cage_site_id in (select site_id from dc_site where site_name='"+site+"') and cage_locn_id in (select locn_id from dc_location where locn_name='"+location+"')"
          } 
          else if (site != null && location==null) {
          query1=" where cage_site_id in (select site_id from dc_site where site_name='"+site+"')";
          }
          else if (site == null && location!=null) {
          query1=" where cage_locn_id in (select locn_id from dc_location where locn_name='"+location+"')";
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
              });
              console.log('connected to database');
            } catch (err) {
              console.error(err.message);
            } finally {
              if (connection) {
      
        connection.execute(
          `select 
          CAGE_ID,
          (SELECT SITE_NAME FROM DC_SITE WHERE SITE_ID=CAGE_SITE_ID) as SITE_NAME,
          (SELECT LOCN_NAME FROM DC_LOCATION WHERE LOCN_ID=CAGE_LOCN_ID) as LOCATION_NAME,
          CAGE_NO,
          CAGE_SUITE_NO,
          CAGE_NO_RACK,
          CAGE_CONTRACTUAL_POWER,
          CAGE_CONTRACTUAL_SPACE_SIZE,
          CAGE_STATUS,
          CAGE_SERVICEID,
          (select cusr_name from dc_customer where cusr_id=cage_cusr_id) customer_name,
          CAGE_CREATED_BY,
          CAGE_CREATED_DT
          from dc_cage` + query1,
          [],  
         function(err, result) {
            if (err) {
              console.error(err.message);
              return;
            }
            console.log(query1);
            res.send(result.rows);
         });

        }
       }
      }
     
      makeConnection()

      })
      
}