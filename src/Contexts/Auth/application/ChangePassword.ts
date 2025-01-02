import { User } from '../../User/user/domain/User'
import { UserDoesNotExistError } from '../../User/user/domain/UserDoesNotExistError'

import { InvalidArgumentError } from '../../Shared/domain/value-object/InvalidArgumentError'
import { UserId } from '../../User/user/domain/UserId'
import { PasswordService } from '../../User/user/domain/PasswordService'
import { JwtPayloadUser } from '../domain/GenerateToken'
import { type UserRepository } from '../../User/user/domain/UserRepository'

export class ChangePassword {
  constructor(private readonly userRepository: UserRepository) { }

  async run({
    payload,
    password,
    newPassword,
    reTypePassword
  }: {
    payload: JwtPayloadUser;
    password: string;
    newPassword: string;
    reTypePassword: string
  }): Promise<void> {
    if (payload.sub === undefined) {
      throw new InvalidArgumentError('wrong payload')
    }
    const userId = new UserId(payload.sub).value
    const user = await this.userRepository.searchById(userId)
    if (user === null) {
      throw new UserDoesNotExistError(payload.sub)
    }

    PasswordService.compare(password.toString(), user.password)

    if (newPassword !== reTypePassword) {
      throw new InvalidArgumentError('Passwords do not match')
    }
    const userEntity = User.fromPrimitives(user)
    userEntity.updatePassword(newPassword)
    await this.userRepository.save(userEntity.toPrimitives())
  }
}
