let activeEffect = null

export function effect(eff) {
  activeEffect = eff
  activeEffect()
  activeEffect = null
}

// 劫持对象 { key: 接触对象, value: Map(key: 劫持对象的 key, value: Set(依赖副作用)) }
const targetMap = new WeakMap()

export function track(target, key) {
  if (activeEffect) {
    if (!targetMap.has(target)) {
      targetMap.set(target, new Map())
    }
    const depsMap = targetMap.get(target)
    if (!depsMap.has(key)) {
      depsMap.set(key, new Set())
    }
    const dep = depsMap.get(key)
    dep.add(activeEffect)
  }
}

export function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (depsMap) {
    let dep = depsMap.get(key)
    if (dep) {
      dep.forEach(effect => effect())
    }
  }
}