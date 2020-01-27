import 'reflect-metadata'
import { Methods, MetaDataKeys } from './types'
import { RequestHandler } from 'express'

interface RouteHandlerDescriptor<T> extends PropertyDescriptor {
  value?: T
}

function routeBinder(method: Methods) {
  return (path: string): Function => {
    return (target: any, key: string | symbol, desc: RouteHandlerDescriptor<RequestHandler>): void => {
      Reflect.defineMetadata(MetaDataKeys.PATH, path, target, key)
      Reflect.defineMetadata(MetaDataKeys.METHOD, method, target, key)
    }
  }
}

export const Get = routeBinder(Methods.GET)
export const Post = routeBinder(Methods.POST)
export const Put = routeBinder(Methods.PUT)
export const Patch = routeBinder(Methods.PATCH)
export const Delete = routeBinder(Methods.DELETE)
