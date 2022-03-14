export function padding(str: string, maxLength: number = 0, fillString: string = ''): string {
  return str
    .padStart(maxLength, fillString)
    .padEnd(maxLength, fillString);
}