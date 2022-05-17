import { User } from "@domain/Users/User";

const userMock: Omit<User, 'id'> = {
	name: 'Lucas',
  email: 'lucas@email.com',
  city: 'santarém',
  state: 'pa',
  number: '93992939293'
}

export const getUserMock = () => ({ ...userMock })