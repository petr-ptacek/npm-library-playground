export function sum(...numbers: number[]): number {
  return numbers.reduce((accum, number) => accum + number, 0);
}