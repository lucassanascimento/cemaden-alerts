import { ICreateAlertsHistoryUseCase, IListAlertsUseCase } from '@domain/Alerts/usecases'
import { IMongoService } from '@infrastructure/db/mongodb/IMongoService'
import { MongoService } from '@infrastructure/db/mongodb/MongoService'
import { CemadenService } from '@infrastructure/services/CemadenService/CemadenService'
import { ICemadenService } from '@infrastructure/services/CemadenService/ICemadenService'
import { HttpService } from '@infrastructure/services/HttpService/HttpService'
import { IHttpService } from '@infrastructure/services/HttpService/IHttpService'
import { AlertsRepository } from 'src/persistence/repositories/AlertsRepository'
import { CreateAlertsHistoryUseCase } from 'src/usecases/Alerts/CreateAlertsHistoryUseCase'
import { ListAlertsUseCase } from 'src/usecases/Alerts/ListAlertsUseCase'
import { container } from 'tsyringe'

// Database
container.registerSingleton<IMongoService>('MongoService', MongoService)

// Repositories
container.registerSingleton<AlertsRepository>('AlertsRepository', AlertsRepository)

// services
container.registerSingleton<ICemadenService>('CemadenService', CemadenService)
container.registerSingleton<IHttpService>('HttpService', HttpService)

// UseCase
container.registerSingleton<IListAlertsUseCase>('ListAlertsUseCase', ListAlertsUseCase)
container.registerSingleton<ICreateAlertsHistoryUseCase>('CreateAlertsHistoryUseCase', CreateAlertsHistoryUseCase)