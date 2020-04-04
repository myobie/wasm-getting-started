import { add } from './add.js'

export async function main () {
  console.debug(1, 3, await add(1, 3))
  console.debug(1000, 3000, await add(1000, 3000))
  console.debug(123456789, 123456789, await add(123456789, 123456789))
}
