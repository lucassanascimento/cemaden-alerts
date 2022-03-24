import 'reflect-metadata'
import '@main/container'
import 'module-alias/register'
import env from '@main/config/env'
import app from '@presentation/gateway/rest/app'
import { MongoService } from '@infrastructure/db/mongodb/MongoService'
import alertsCemande from './config/alertsCemande'

// const dbConnection = new MongoService()

alertsCemande.listen(3000)

app.listen(
  env.port,
  () => console.log(`Server running at: http://localhost:${env.port}`)
)
