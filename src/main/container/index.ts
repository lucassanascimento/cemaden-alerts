import { IListAlertsUseCase } from '@domain/Alerts/usecases'
import { CemandenService } from '@infrastructure/services/CemandenService'
import { ListAlertsUseCase } from '@usecases/Alerts/ListAlertsUsecase'
import { container } from 'tsyringe'


// services
container.registerSingleton<CemandenService>('CemandenService', CemandenService)

// UseCase
container.registerSingleton<IListAlertsUseCase>('ListAlertsUseCase', ListAlertsUseCase)