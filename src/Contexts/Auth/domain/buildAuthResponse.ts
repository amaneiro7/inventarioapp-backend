import { type RolePrimitives } from '../../User/Role/domain/Role.dto';
import { type UserPrimitives } from '../../User/user/domain/User';
import { type AuthResponseDto } from './Auth.dto';

type UserWithRole = UserPrimitives & {
  role: RolePrimitives;
};

export function buildAuthResponse(
  user: UserWithRole,
  accessToken: string,
  refreshToken?: string
): AuthResponseDto {
  const { id, lastName, name, email, role } = user;
  const response: AuthResponseDto = {
    user: {
      id,
      name,
      lastName,
      email,
      role,
    },
    accessToken,
  };

  if (refreshToken) {
    response.refreshToken = refreshToken;
  }

  return response;
}
