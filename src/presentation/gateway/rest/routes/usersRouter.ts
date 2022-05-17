import { ListAlertsController } from "@presentation/controllers/Alerts/ListAlertsController"
import { container } from "tsyringe"
import { Request, Response } from 'express'
import { JsonController, Post, Req, Res } from 'routing-controllers'
import { adapterExpressRoute } from "../adpters/adpterExpressRoute"
import { UsersController } from "@presentation/controllers/Users/UsersController"

const userController = container.resolve(UsersController)

@JsonController('/')
export class AlertsRouter {
  @Post('user')
  add(@Req() request: Request, @Res() response: Response) {
    return adapterExpressRoute(userController.add, request, response)
  }
} 
