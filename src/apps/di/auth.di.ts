import { asClass, type AwilixContainer } from "awilix";
import { ChangePassword } from "../../Contexts/Auth/application/ChangePassword";
import { UserLoginLocal } from "../../Contexts/Auth/application/UserLoginLocal";
import { LocalAuthStrategy } from "../../Contexts/Auth/infrastructure/passport/strategies/local.strategy";
import { JwtCookiesStrategy } from "../../Contexts/Auth/infrastructure/passport/strategies/jwt-cookie.strategy";
import { PassportManager } from "../../Contexts/Auth/infrastructure/passport";
import { AuthLoginController } from "../controllers/auth.login.controller";
//import { container } from "./container"

export const register = (container: AwilixContainer) => {

    container.register({
        changePassword: asClass(ChangePassword),
        userLoginLocal: asClass(UserLoginLocal),
        localStrategy: asClass(LocalAuthStrategy),
        jwtCookiesStrategy: asClass(JwtCookiesStrategy),
        passportManager: asClass(PassportManager),
        authLoginController: asClass(AuthLoginController),
        authLogoutController: asClass(AuthLoginController),
        authRefreshTokenController: asClass(AuthLoginController),
    })
}