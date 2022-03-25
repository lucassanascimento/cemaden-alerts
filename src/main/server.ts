import 'reflect-metadata'
import '@main/container'
import 'module-alias/register'
import env from '@main/config/env'
import app from '@presentation/gateway/rest/app'
import cemadenCron from './config/cemadenCron'
import { logger } from '@commons/utils/logger'

const { CRON_MODE } = env.app

if (CRON_MODE) {
  cemadenCron.listen(3000)
} else {
  app.listen(
    env.app.port,
    () => logger.info(`Server running at: http://localhost:${env.app.port}`)
  )
}
