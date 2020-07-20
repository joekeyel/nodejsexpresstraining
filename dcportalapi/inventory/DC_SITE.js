const oracledb = require('oracledb');
const Promise = require("bluebird");

var password = 'Tm1m5u5R' 
module.exports = function (app) {
  

    const callapi = app.get('/api/DC_SITE',(req,res)=>{

     

      site = req.query.site;
     
    
      
    
       
      if (site != null) {
        query1=" where SITE_NAME='"+site+"'";
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

                `select 
                site_id, 
                site_name, 
                site_desc, 
                site_workgroup,
                site_verified_tag,
                site_mgr, 
                site_mgr_no, 
                site_status,  
                site_total_space_cap, 
                site_total_power_cap, 
                SITE_VERIFIED_BY,
                to_char(SITE_VERIFIED_DT,'dd/mm/yyyy hh:mi:ss am') as SITE_VERIFIED_DT,
                to_char(site_created_dt,'dd/mm/yyyy hh:mi:ss am') as site_created_dt, 
                site_created_by,
                to_char(site_updated_dt,'dd/mm/yyyy hh:mi:ss am') as site_updated_dt, 
                site_updated_by,
                to_char(site_updated_dt,'dd/mm/yyyy hh:mi:ss am') as site_updated_dt, 
                to_char(SITE_DECOMM_DT,'dd/mm/yyyy') as SITE_DECOMM_DT, 
                to_char(SITE_COMM_DT,'dd/mm/yyyy') as SITE_COMM_DT, 
                to_char(SITE_DECOMM_DT,'dd/mm/yyyy hh:mi:ss am') as SITE_DECOMM_DT_V, 
                to_char(SITE_COMM_DT,'dd/mm/yyyy hh:mi:ss am') as SITE_COMM_DT_V, 
                adde_type, 
                adde_no, 
                adde_floor, 
                adde_building, 
                adde_sttype||' '||adde_stname as adde_stname, 
                adde_postcode, 
                adde_section, 
                adde_city, 
                adde_state,
                (case when adde_no is not null then adde_no||',' else '' end)||
                (case when adde_floor is not null then adde_floor||',' else '' end)||
                (case when adde_building is not null then adde_building||',' else '' end)||
                adde_sttype||' '||adde_stname||','||
                adde_postcode||','||
                adde_section||','||
                adde_city||','||adde_state
                   as full_address 
                from DC_SITE t
                left join dc_addresses a on t.site_adde_id=a.adde_id `+ query1 +`` ,
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