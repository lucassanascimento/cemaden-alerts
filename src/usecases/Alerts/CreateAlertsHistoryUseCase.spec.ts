import { AlertStatus } from '@domain/Alerts';
import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository';
import { ICreateAlertsHistoryUseCase } from '@domain/Alerts/usecases';
import { FakeAlertsRepository } from '@test/repositories/FakeAlertsRepository';
import { getCemadenAlertsMock } from '@test/repositories/mocks/alertsCemadenMock';
import { getAlertStatusMock } from '@test/repositories/mocks/alertStatusMock';
import { CreateAlertsHistoryUseCase } from './CreateAlertsHistoryUseCase';

const mackSut = () => {
  const fakeAlertsRepository: IAlertsRepository = new FakeAlertsRepository()
  const fakeCreateAlertsHistoryUseCase: ICreateAlertsHistoryUseCase = new CreateAlertsHistoryUseCase(fakeAlertsRepository)
  return { fakeAlertsRepository, fakeCreateAlertsHistoryUseCase }
}

describe('CreateAlertsHistoryUseCase', () => {

  it('Should call altersRepository with correct values', async () => {
    const { fakeAlertsRepository, fakeCreateAlertsHistoryUseCase } = mackSut()
    const alertRepositorySpy = jest.spyOn(fakeAlertsRepository, 'add')
    await fakeCreateAlertsHistoryUseCase.handle(getCemadenAlertsMock())
    expect(alertRepositorySpy).toBeCalledWith(getAlertStatusMock())
  })
  
  it('Should call CreateAlertsHistoryUseCase with correct values', async () => {
    const { fakeCreateAlertsHistoryUseCase } = mackSut()
    const alertRepositorySpy = jest.spyOn(fakeCreateAlertsHistoryUseCase, 'handle')
    await fakeCreateAlertsHistoryUseCase.handle(getCemadenAlertsMock())
    expect(alertRepositorySpy).toBeCalledWith(getCemadenAlertsMock())
  })
})
