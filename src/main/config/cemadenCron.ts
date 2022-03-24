import express from 'express'
import cron from 'node-cron'

const cemadenCron = express()

cron.schedule("*/5 * * * * *", () => console.log("Runs CRON CEMADEN every 5 seg"));

export default cemadenCron