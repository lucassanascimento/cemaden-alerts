import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository'
import { ICreateAlertsHistoryUseCase, IListAlertsUseCase } from '@domain/Alerts/usecases'
import { IUsersRepository } from '@domain/Users/repositories/IUsers'
import { ICreateUserUseCase } from '@domain/Users/usecases/ICreateUserUseCase'
import { IMongoService } from '@infrastructure/db/mongodb/IMongoService'
import { MongoService } from '@infrastructure/db/mongodb/MongoService'
import { CemadenService } from '@infrastructure/services/CemadenService/CemadenService'
import { ICemadenService } from '@infrastructure/services/CemadenService/ICemadenService'
import { HttpService } from '@infrastructure/services/HttpService/HttpService'
import { IHttpService } from '@infrastructure/services/HttpService/IHttpService'
import { AlertsRepository } from 'src/persistence/repositories/Alerts/AlertsRepository'
import { UsersRepository } from 'src/persistence/repositories/Users/UsersRespository'
import { CreateAlertsHistoryUseCase } from 'src/usecases/Alerts/CreateAlertsHistoryUseCase'
import { ListAlertsUseCase } from 'src/usecases/Alerts/ListAlertsUseCase'
import { SendMessageWhatsAppUseCase } from 'src/usecases/Mensagens/SendMessageWhatsAppUseCase'
import { CreateUserUseCase } from 'src/usecases/Users/CreateUserUseCase'
import { container } from 'tsyringe'

// Database
container.registerSingleton<IMongoService>('MongoService', MongoService)

// Repositories
container.registerSingleton<IAlertsRepository>('AlertsRepository', AlertsRepository)
container.registerSingleton<IUsersRepository>('UsersRespository', UsersRepository)

// services
container.registerSingleton<ICemadenService>('CemadenService', CemadenService)
container.registerSingleton<IHttpService>('HttpService', HttpService)

// UseCase
container.registerSingleton<IListAlertsUseCase>('ListAlertsUseCase', ListAlertsUseCase)
container.registerSingleton<ICreateAlertsHistoryUseCase>('CreateAlertsHistoryUseCase', CreateAlertsHistoryUseCase)
container.registerSingleton<ICreateUserUseCase>('CreateUserUseCase', CreateUserUseCase)
container.registerSingleton<SendMessageWhatsAppUseCase>('SendMessageWhatsAppUseCase', SendMessageWhatsAppUseCase)