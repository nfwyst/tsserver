import {
  NextFunction,
  Request,
  Response
} from 'express'

export function auth(req: Request, res: Response, next: NextFunction): void {
  const { session } = req
  if (session && session.loggedIn) {
    return next()
  }
  res.status(403).send('Not permitted')
}
