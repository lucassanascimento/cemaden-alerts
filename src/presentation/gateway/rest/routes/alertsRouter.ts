import { ListAlertsController } from "@presentation/controllers/Alerts/ListAlertsController"
import { container } from "tsyringe"
import { Request, Response } from 'express'
import { adpterExpressRoute } from "../adpters/adpterExpressRoute"
import { Get, JsonController, Req, Res } from 'routing-controllers'

const alertsController = container.resolve(ListAlertsController)

@JsonController('/')
export class AlertsRouter {
  @Get('alerts')
  listAlerts(@Req() request: Request, @Res() response: Response)  {
    return adpterExpressRoute(alertsController.listAlerts, request, response)
  }
}