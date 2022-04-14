import { AlertStatus } from '@domain/Alerts';
import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository';
import { ICreateAlertsHistoryUseCase, IListAlertsUseCase } from '@domain/Alerts/usecases';
import { FakeAlertsRepository } from '@test/repositories/FakeAlertsRepository';
import { getCemadenAlertsMock } from '@test/repositories/mocks/alertsCemadenMock';
import { getAlertStatusMock } from '@test/repositories/mocks/alertStatusMock';
import { CreateAlertsHistoryUseCase } from './CreateAlertsHistoryUseCase';
import { ListAlertsUseCase } from './ListAlertsUseCase';

const mackSut = () => {
  const fakeAlertsRepository: IAlertsRepository = new FakeAlertsRepository()
  const fakeListAlertsUseCase: IListAlertsUseCase = new ListAlertsUseCase(fakeAlertsRepository)
  return { fakeAlertsRepository, fakeListAlertsUseCase }
}

describe('ListAlertsUseCase', () => {

  it('Should call altersHistoryRepository', async () => {
    const { fakeAlertsRepository, fakeListAlertsUseCase } = mackSut()
    const alertRepositorySpy = jest.spyOn(fakeAlertsRepository, 'list')
    await fakeListAlertsUseCase.handle()
    expect(alertRepositorySpy).toBeCalled()
  })
})
