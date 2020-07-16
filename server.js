const express = require('express');
const morgan  = require('morgan')
const path = require('path');

const app = express();
app.use(morgan('combined'))

//check oracle connection
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
// bqmdev schema password
var password = 'Tm1m5u5R' 
// checkConnection asycn function
try {
  oracledb.initOracleClient({libDir: './instantclient_19_3'});
} catch (err) {
  console.error('Whoops!');
  console.error(err);
  process.exit(1);
}

  

// async function makeConnection() {
//   try {
//     connection = await oracledb.getConnection({
//         user: "TMIMS",
//         password: password,
//         connectString: "127.0.0.1:1527/BQMDEV"
//     });
//     console.log('connected to database');
//   } catch (err) {
//     console.error(err.message);
//   } finally {
//     if (connection) {
//       // try {
//       //   // Always close connections
//       //   await connection.close(); 
//       //   console.log('close connection success');
//       // } catch (err) {
//       //   console.error(err.message);
//       // }

//       connection.execute(
//         `SELECT *
//          FROM DC_LOCATION`,
//         [],  
//        function(err, result) {
//           if (err) {
//             console.error(err.message);
//             return;
//           }
//           console.log(result.rows);
//        });
  
//     }
//   }

  
  

// }

//jump host for nice database

var config = {
  username:'clarity',
  password:'clarity',
  host:'10.54.5.141',
  port:22,
  dstHost:'10.54.8.162',
  dstPort:1521,
  localHost:'127.0.0.1',
  localPort: 1521
};

var tunnel = require('tunnel-ssh');
tunnel(config, function (error, server) {

  if(error){
    console.log(error.message);
  }

  console.log("tunnel")



  //....
});

//api dc_cage

require('./dcportalapi/inventory/DC_CAGE')(app);
require('./dcportalapi/inventory/DC_CRAC')(app);
require('./dcportalapi/inventory/DC_DASHBOARD_INFO')(app);
require('./dcportalapi/inventory/DC_NETWORK_BANDWIDTH')(app);
require('./dcportalapi/inventory/DC_NETWORK_PORT')(app);


require('./dcportalapi/DC_USER')(app);

require('./dcportalapi/DC_NE_UTILIZATION')(app);

//require('./dcportalapi/DC_LOCATION')(app);

require('./dcportalapi/DC_INBOX_LIST')(app);
require('./dcportalapi/DC_MASTERLIST')(app);
require('./dcportalapi/DC_PENDING_APPROVAL')(app);


  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });


const PORT = process.env.PORT || 5005;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));