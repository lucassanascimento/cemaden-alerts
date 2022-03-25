export default {
  app: {
    port: process.env.PORT || 5000,
    cemaden: {
      ALERTS_PANEL: 'http://www2.cemaden.gov.br/painelalertas/wsAlertas2.php'
    },
    CRON_MODE: process.env.CRON_ON
  },
  mongodb: {
    mongoUri: String(process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017')
  }
}
