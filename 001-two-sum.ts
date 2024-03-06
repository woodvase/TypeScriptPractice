function twoSum (nums: number[], target: number): number[] {
  const dictionary: Record<number, number[]> = {}
  for (const k of nums.entries()) {
    const [index, value] = k
    if (dictionary[value] === undefined) {
      console.log('asdfsf')
      dictionary[value] = [index]
    } else {
      dictionary[value].push(index)
    }
  }

  for (const k of nums.keys()) {
    const first = nums[k]
    const second = target - first
    for (const i of dictionary[second]) {
      if (i !== k) {
        return [k, i]
      }
    }
  }
  return []
}

console.log(twoSum([3, 3], 6))
