import { Request, Response } from 'express'
import { Get, Controller, bodyValidator, Post } from './decorator'

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

@Controller('/auth')
class LoginController {
  @Get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>邮箱</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>密码</label>
          <input type="password" name="password" />
        </div>
        <button>提交</button>
      </form>
    `)
  }

  @Post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response): void {
    const { password, email } = req.body
    if (email === 'hi@world.com' && password === '123456') {
      req.session = { loggedIn: true }
      res.redirect('/')
    } else {
      res.send('invalid email or password')
    }
  }

  @Get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined
    res.redirect('/')
  }
}

export default LoginController
