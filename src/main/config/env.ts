export default {
  app: {
    port: process.env.PORT || 5000,
    cemaden: {
      ALERTS_PANEL: 'http://www2.cemaden.gov.br/painelalertas/wsAlertas2.php'
    },
  },
  cron: {
    port: process.env.PORT || 5001,
    CEMADEN: process.env.CEMADEN || null
  },
  mongodb: {
    mongoUri: String(process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017')
  }
}
