import { baseHandlers } from "./baseHandlers.mjs"

export function reactive(target) {
  const result = new Proxy(target, baseHandlers)
  
  return result
}