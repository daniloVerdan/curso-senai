// INICIAR SERVIDOR

import { buildApp } from './app.js'
import { config } from 'dotenv'

config()


const app = buildApp()

app.listen({ port: process.env.PORT ?? 3000 }, (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }

    console.log(`Servidor rodando em ${address}`)
})
