export function average(array: number[]) {
  const average = array.reduce((acc, curr) => acc + curr, 0) / array.length;
  return average;
}
