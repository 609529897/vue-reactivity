import { track, trigger } from "./effect.mjs"

export const baseHandlers = {
  get(target, key, receiver) {
    const result = Reflect.get(target, key, receiver)

    track(target, key)

    return result
  },
  set(target, key, newValue, receiver) {

    const oldValue = target[key]

    const result = Reflect.set(target, key, newValue, receiver)

    if (oldValue !== newValue) {
      trigger(target, key)
    }

    return result
  }
}