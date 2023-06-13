import { join } from 'node:path'
import express from 'express'
import locationRoutes from './routes/locations'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/vi/locations', locationRoutes)

export default server
