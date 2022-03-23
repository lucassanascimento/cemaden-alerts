import { IListAlertsUseCase } from '@domain/Alerts/usecases'
import { IMongoService } from '@infrastructure/db/mongodb/IMongoService'
import { MongoService } from '@infrastructure/db/mongodb/MongoService'
import { CemandeService } from '@infrastructure/services/CemadenService/CemadenService'
import { ICemadenService } from '@infrastructure/services/CemadenService/ICemadenService'
import { HttpService } from '@infrastructure/services/HttpService/HttpService'
import { IHttpService } from '@infrastructure/services/HttpService/IHttpService'
import { AltersRepository } from 'src/persistence/repositories/AltersRepository'
import { ListAlertsUseCase } from 'src/usecases/Alerts/ListAlertsUseCase'
import { container } from 'tsyringe'

// Database
container.registerSingleton<IMongoService>('MongoService', MongoService)

// Repositories
container.registerSingleton<AltersRepository>('AltersRepository', AltersRepository)

// services
container.registerSingleton<ICemadenService>('CemandeService', CemandeService)
container.registerSingleton<IHttpService>('HttpService', HttpService)

// UseCase
container.registerSingleton<IListAlertsUseCase>('ListAlertsUseCase', ListAlertsUseCase)