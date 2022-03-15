import { IListAlertsUseCase } from '@domain/Alerts/usecases'
import { CemandeService } from '@infrastructure/services/CemadenService'
import { ICemadenService } from '@infrastructure/services/ICemadenService'
import { ListAlertsUseCase } from '@usecases/Alerts/ListAlertsUseCase'
import { container } from 'tsyringe'


// services
container.registerSingleton<ICemadenService>('CemandeService', CemandeService)

// UseCase
container.registerSingleton<IListAlertsUseCase>('ListAlertsUseCase', ListAlertsUseCase)