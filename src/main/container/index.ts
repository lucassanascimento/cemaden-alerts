import { IListAlertsUseCase } from '@domain/Alerts/usecases'
import { CemandeService } from '@infrastructure/services/CemadenService/CemadenService'
import { ICemadenService } from '@infrastructure/services/CemadenService/ICemadenService'
import { HttpService } from '@infrastructure/services/HttpService/HttpService'
import { IHttpService } from '@infrastructure/services/HttpService/IHttpService'
import { ListAlertsUseCase } from '@usecases/Alerts/ListAlertsUseCase'
import { container } from 'tsyringe'


// services
container.registerSingleton<ICemadenService>('CemandeService', CemandeService)
container.registerSingleton<IHttpService>('HttpService', HttpService)

// UseCase
container.registerSingleton<IListAlertsUseCase>('ListAlertsUseCase', ListAlertsUseCase)