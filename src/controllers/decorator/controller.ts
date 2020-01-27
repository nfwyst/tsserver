import 'reflect-metadata'
import { AppRouter } from '../../appRouter'
import { Methods, MetaDataKeys } from './types'
import { RequestHandler, NextFunction, Request, Response } from 'express'

const bodyValidate = (keys: string[]): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.body) {
      res.status(422).send('Invalid request')
      return
    }
    for (let key of keys) {
      if (typeof req.body[key] === 'undefined') {
        res.status(422).send('Invalid request')
        return
      }
    }
    return next()
  }
}

export function Controller(prefixPath: string): ClassDecorator {
  return (target: Function): void => {
    const { prototype } = target
    for (let key in prototype) {
      const routeHandler = prototype[key]
      const path = Reflect.getMetadata(MetaDataKeys.PATH, prototype, key)
      const method: Methods = Reflect.getMetadata(MetaDataKeys.METHOD, prototype, key)
      const middlewares: RequestHandler[] = Reflect.getMetadata(
        MetaDataKeys.MIDDLEWARE, target.prototype, key
      ) || []
      const router = AppRouter.instance
      const requiredBodyProps = Reflect.getMetadata(MetaDataKeys.VALIDATOR, prototype, key) || []
      const validator = bodyValidate(requiredBodyProps)
      if (path) router[method](`${prefixPath}${path}`, ...middlewares, validator, routeHandler)
    }
  }
}
