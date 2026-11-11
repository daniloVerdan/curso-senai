import Fastify from 'fastify'
import { cadastrosRoutes } from './routes/cadastro-routes.js'
import cors from '@fastify/cors'

export function buildApp() {
    
    const app = Fastify({ logger: true })

    app.register(cors, {origin: '*'})

    app.register(cadastrosRoutes, { prefix: '/cadastro' })

    return app
}