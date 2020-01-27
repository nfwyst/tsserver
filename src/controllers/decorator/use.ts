import 'reflect-metadata'
import { MetaDataKeys } from './types'
import { RequestHandler } from 'express'

export function Use(middleware: RequestHandler): MethodDecorator {
  return (target: any, key: string | symbol, desc: PropertyDescriptor): void => {
    const middlewares: RequestHandler[] = Reflect.getMetadata(MetaDataKeys.MIDDLEWARE, target, key)
      || []
    middlewares.push(middleware)
    Reflect.defineMetadata(MetaDataKeys.MIDDLEWARE, middlewares, target, key)
  }
}
