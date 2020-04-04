/* global fetch WebAssembly */

if (!window.WebAssembly) {
  throw new Error('Oops, WebAssembly not available!')
}

const cachedInstance = load()

export async function add (a, b) {
  const instance = await cachedInstance
  return instance.exports.add(a, b)
}

async function load () {
  const response = await fetch('src/add/add.wasm')
  const bytes = await response.arrayBuffer()
  const { module, instance } = await WebAssembly.instantiate(
    bytes,
    {} // we have no imports, so our importObject is empty
  )
  console.debug(module)
  console.debug(instance)
  return instance
}
