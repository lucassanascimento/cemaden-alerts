import cors from 'cors'
import express from 'express'
import { useExpressServer } from 'routing-controllers'

const app = express()

app.use(express.json())
app.use(cors())

useExpressServer(app, {
  controllers: [`${__dirname}/routes/*{.ts,.js}`],
  defaultErrorHandler: false,
  classTransformer: false
})

export default app
