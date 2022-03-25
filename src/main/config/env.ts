export default {
  port: process.env.PORT || 5000,
  cemaden: {
    ALERTS_PANEL: 'http://www2.cemaden.gov.br/painelalertas/wsAlertas2.php'
  },
  mongodb: {
    mongoUri: String(process.env.MONGO_CONNECTION_STRING || 'mongodb://alerts-cemanden:99290288caa541e4ace170ead7c4f8ee@localhost:27017')
  }
}
