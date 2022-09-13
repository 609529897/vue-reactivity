import { track, trigger } from "./effect.mjs"

export function ref(raw) {
  return {
    get value() {
      track(r, 'value')
      return raw
    },
    set value(newValue) {
      raw = newValue
      trigger(r, 'value')
    }
  }
}