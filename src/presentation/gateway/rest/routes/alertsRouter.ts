import { ListAlertsController } from "@presentation/controllers/Alerts/ListAlertsController"
import { container } from "tsyringe"
import { Request, Response } from 'express'
import { Get, JsonController, Req, Res } from 'routing-controllers'
import { adapterExpressRoute } from "../adpters/adpterExpressRoute"

const alertsController = container.resolve(ListAlertsController)

@JsonController('/')
export class AlertsRouter {
  @Get('alerts')
  listAlerts(@Req() request: Request, @Res() response: Response) {
    return adapterExpressRoute(alertsController.listAlerts, request, response)
  }
} 
