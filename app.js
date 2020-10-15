const fetch = require("node-fetch");
const moment = require("moment");
var firebase = require("firebase");
var admin = require('firebase-admin');
var serviceAccount = require("/home/hasher/Desktop/serviceKey.json");

function printHello() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  var message = {
    notification: {
      title: "checking fromnpode",
      body: 'kjkk',
    },
    token: "fsuojYe2R4-LleTRW9owQU:APA91bE35o3rw-4wXkCv0lwa_dnCxsBr7d1VCPxXubBLrd-QuztXtrfPrqSOs24vXFh8WeqFNCeNhQmJ9krCvCe3XQ3zW1KgMcZJwnKchkpOD_bC6Yvv8G1wfco-dd0CQ6891EGIyadm",
  };

  admin.messaging().sendAll(new Array(499).fill({...message}))
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });

  searchDateTimeFrom = moment()
    .subtract(10, "minutes")
    .format("YYYY-MM-DDThh:mm:ss");
  searchDateTimeTo = moment().format("YYYY-MM-DDThh:mm:ss");
  // fetch(
  //   `https://apm-apac-ww-dev-apim.azure-api.net/notificationmanagement/notifications/list?searchDateTimeFrom=${searchDateTimeFrom}&searchDateTimeTo=${searchDateTimeTo}&searchStatusFlag=A`,
  //   {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   }
  // )
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));
}

printHello();
