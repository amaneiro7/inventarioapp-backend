import { PasswordService } from '../../../User/user/domain/PasswordService'
import { UserDoesNotExistError } from '../../../User/user/domain/UserDoesNotExistError'
import { UserEmail } from '../../../User/user/domain/UserEmail'
import { type UserPrimitives } from '../../../User/user/domain/User'
import { type UserRepository } from '../../../User/user/domain/UserRepository'

export class UserLoginLocal {
  constructor(private readonly repository: UserRepository) { }

  async run({ email, intoPassword }: { email: string, intoPassword: string }): Promise<UserPrimitives> {
    const userEmail = new UserEmail(email)

    const user = await this.repository.searchByEmail(userEmail.value)

    if (!user) {
      throw new UserDoesNotExistError(email)
    }

    PasswordService.compare(intoPassword, user.password)

    return user
  }
}
