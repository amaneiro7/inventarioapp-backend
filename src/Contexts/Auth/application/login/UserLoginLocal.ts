import { type Repository } from '../../../Shared/domain/Repository'
import { PasswordService } from '../../../User/user/domain/PasswordService'
import { type UserPrimitives } from '../../../User/user/domain/User'
import { UserDoesNotExistError } from '../../../User/user/domain/UserDoesNotExistError'
import { UserEmail } from '../../../User/user/domain/UserEmail'
// import { type Tokens, generateTokens } from '../../domain/GenerateToken'

export class UserLoginLocal {
  constructor(private readonly repository: Repository) { }

  async run({ email, intoPassword }: { email: string, intoPassword: string }): Promise<UserPrimitives> {
    const user = await this.repository.user.searchByEmail(new UserEmail(email).toPrimitives())

    if (user === null) {
      throw new UserDoesNotExistError(email.toString())
    }

    PasswordService.compare(intoPassword.toString(), user.password)
    // const { password, ...payload } = user
    // return generateTokens(payload)
    return user
  }
}
