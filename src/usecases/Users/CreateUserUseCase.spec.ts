import { IUsersRepository } from "@domain/Users/repositories/IUsers"
import { ICreateUserUseCase } from "@domain/Users/usecases/ICreateUserUseCase"
import { FakeUserRepository } from "@test/repositories/FakeUserRepository"
import { getUserMock } from "@test/repositories/mocks/addUserMock"
import { CreateUserUseCase } from "./CreateUserUseCase"

const makeSut = () => {
  const fakeUsersRespository: IUsersRepository = new FakeUserRepository()
  const fakeCreateUserUseCase: ICreateUserUseCase = new CreateUserUseCase(fakeUsersRespository)
  return { fakeUsersRespository, fakeCreateUserUseCase }
}

describe('CreateUserUseCase', () => {
  it('should call UsersRepository with correct values', async () => {
    const { fakeUsersRespository, fakeCreateUserUseCase } = makeSut()
    const userRespositorySpy = jest.spyOn(fakeUsersRespository, 'add')
    await fakeCreateUserUseCase.handle(getUserMock())
    expect(userRespositorySpy).toBeCalledWith(getUserMock())
  })
})