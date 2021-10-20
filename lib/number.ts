export function gaussian(min = 0, max = 0, skew = 1): number {
  let u = 0
  let v = 0

  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()

  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)

  num = num / 10.0 + 0.5

  if (num > 1 || num < 0) num = gaussian(min, max, skew)

  num **= skew
  num *= max - min
  num += min

  return num
}

export function gaussianPair(mean = 0, deviation = 0): number[] {
  const num = Math.sqrt(-2.0 * Math.log(1 - Math.random()))
  const sigma = 2.0 * Math.PI * (1 - Math.random())

  return [num * Math.cos(sigma), num * Math.sin(sigma)].map(
    (val) => val * deviation * mean
  )
}
