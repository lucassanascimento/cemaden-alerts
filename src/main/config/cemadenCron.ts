import { logger } from '@commons/uteis/logger';
import express from 'express'
import cron from 'node-cron'

const cemadenCron = express()

cron.schedule("*/5 * * * * *", () => logger.info("Runs CRON CEMADEN every 5 seg"));

export default cemadenCron