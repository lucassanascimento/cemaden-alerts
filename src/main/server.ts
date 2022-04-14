import 'reflect-metadata'
import '@main/container'
import 'module-alias/register'
import env from '@main/config/env'
import app from '@presentation/gateway/rest/app'
import cemadenCron from './config/cemadenCron'
import { logger } from '@commons/utils/logger'

const { CEMADEN } = env.cron

if (CEMADEN) {
  cemadenCron.listen(
    env.cron.port,
    () => console.log(`CRON running at: http://localhost:${env.cron.port}`)
  )
} else {
  app.listen(
    env.app.port,
    () => console.log(`Server running at: http://localhost:${env.app.port}`)
  )
}

// app.listen(
//   env.app.port,
//   () => console.log(`Server running at: http://localhost:${env.app.port}`)
// )
