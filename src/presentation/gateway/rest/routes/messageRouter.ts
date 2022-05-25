import { ListAlertsController } from "@presentation/controllers/Alerts/ListAlertsController"
import { container } from "tsyringe"
import { Request, Response } from 'express'
import { JsonController, Post, Req, Res } from 'routing-controllers'
import { adapterExpressRoute } from "../adpters/adpterExpressRoute"
import { MessageController } from "@presentation/controllers/Mensage/MessageController"

const messageController = container.resolve(MessageController)

@JsonController('/')
export class MessageRouter {
  @Post('message')
  add(@Req() request: Request, @Res() response: Response) {
    return adapterExpressRoute(messageController.send, request, response)
  }
} 
