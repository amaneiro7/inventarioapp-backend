
import { InventarioBackendApp } from "./apps/InventarioBackendApp"

try {
    new InventarioBackendApp().start()
} catch (e) {
    console.error(e)
    process.exit(1)
}


process.on('uncaughtException', err => {
    console.error('uncaughtException', err)
    process.exit(1)
})
