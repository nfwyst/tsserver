import { Request, Response } from 'express'
import { Get, Controller, Use } from './decorator'
import { auth } from './middlewares'

@Controller('')
class RootController {
  @Get('/')
  getRoot(req: Request, res: Response): void {
    const { session } = req
    if (session && session.loggedIn) {
      res.send(`
        <div>You are logged in</div>
        <a href="/auth/logout">logout</a>
      `)
    } else {
      res.send(`
        <div>You are not logged in</div>
        <a href="/auth/login">login</a>
      `)
    }
  }

  @Get('/protected')
  @Use(auth)
  getProtected(req: Request, res: Response): void {
    res.send('Welcome to protected route, logged in user')
  }
}

export default RootController
