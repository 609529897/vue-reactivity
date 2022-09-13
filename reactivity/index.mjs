import { effect } from "./effect.mjs"
import { computed } from "./computed.mjs"
import { reactive } from "./reactive.mjs"
import { ref } from "./ref.mjs"

function run() {
  const rect = reactive({
    width: 100,
    height: 100
  })

  effect(() => {
    console.log(rect.height)
  })

}

run()

export {
  effect,
  computed,
  reactive,
  ref
}