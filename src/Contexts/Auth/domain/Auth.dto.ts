import { type RolePrimitives } from '../../User/Role/domain/Role.dto';

export interface AuthResponseDto {
  user: {
    id: string;
    name: string;
    lastName: string;
    email: string;
    role: RolePrimitives;
  };
  accessToken: string;
  refreshToken?: string;
}
