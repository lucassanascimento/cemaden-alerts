import 'reflect-metadata'
import '@main/container'
import 'module-alias/register'
import env from '@main/config/env'
import app from '@presentation/gateway/rest/app'
import { MongoService } from '@infrastructure/db/mongodb/MongoService'
import cemadenCron from './config/cemadenCron'
import { logger } from '@commons/uteis/logger'

cemadenCron.listen(3000)
app.listen(
  env.port,
  () => logger.info(`Server running at: http://localhost:${env.port}`)
)
