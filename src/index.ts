import express from 'express'
import { urlencoded } from 'body-parser'
import cookieSession from 'cookie-session'
import { AppRouter } from './appRouter'
import './controllers'

const app = express()

app
  .use(urlencoded({ extended: true }))
  .use(cookieSession({ keys: ['hello world'] }))
  .use(AppRouter.instance)
  .listen(3000, () => console.log('server start on port 3000'))
