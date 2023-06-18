import { join, resolve } from 'node:path'
import express from 'express'
import locationRoutes from './routes/locations'

const server = express()



server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/vi/locations', locationRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(resolve(__dirname, '../../assets')))
  server.use('/images', express.static(resolve(__dirname, '../../images')))
  server.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../../index.html'))
  })
}
export default server
