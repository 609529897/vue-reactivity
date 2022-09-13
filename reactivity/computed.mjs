import { ref } from "./ref.mjs"
import { effect } from "./effect.mjs"

export function computed(getter) {
  const result = ref()

  effect(() => (result.value = getter()))

  return result

}