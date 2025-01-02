import { asClass, AwilixContainer } from "awilix";
import { WinstonLogger } from "../../Contexts/Shared/infrastructure/WinstonLogger";

export function registerServices(container: AwilixContainer) {
    container.register({
        logger: asClass(WinstonLogger)
    })
}