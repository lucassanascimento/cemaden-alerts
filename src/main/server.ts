import 'reflect-metadata'
import '@main/container'
import 'module-alias/register'
import env from '@main/config/env'
import app from '@presentation/gateway/rest/app'

app.listen(
  env.port,
  () => console.log(`Server running at: http://localhost:${env.port}`)
)
