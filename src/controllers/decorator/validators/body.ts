import 'reflect-metadata'
import { MetaDataKeys } from '../types'

export function bodyValidator(...keys: string[]) {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    Reflect.defineMetadata(MetaDataKeys.VALIDATOR, keys, target, key)
  }
}
