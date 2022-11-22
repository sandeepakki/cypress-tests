const { defineConfig } = require("cypress");
const mysql = require("mysql");
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.config.js env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    })
  })
}
module.exports = defineConfig({
  projectId: 'm4dzbb',
    viewportHeight:1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000,
    requestTimeout: 60000,
    experimentalWebKitSupport: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    retries:{
      runMode: 1
    },
    env:{
      db: {
        host: "localhost",
        user: "admin",
        password: "tartanpassword",
        database: "test"
      }},
  e2e: {
    baseUrl: 'https://bs.tartanhq.com/',
    apiURL: 'https://api-stg.tartanhq.com/marvel/api/v1',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      on("task", {
        queryDb: query => {
          return queryTestDb(query, config);
        }
      })
    },
    specPattern: 'cypress/integration/examples/*.js'
      },
    screenshotsFolder: 'cypress/failures/screenshots',
  })
