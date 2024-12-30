import { ContainerBuilder, YamlFileLoader } from "node-dependency-injection";
import { config } from "../../Contexts/Shared/infrastructure/config";

const container = new ContainerBuilder()
const loader = new YamlFileLoader(container)
const env = config.env

loader.load(`${__dirname}/application_${env}.yaml`)

export default container