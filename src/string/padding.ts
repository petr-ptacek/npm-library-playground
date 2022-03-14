export function padding(str: string, length: number = 0, fillString: string = ''): string {
  const fill = Array.from({ length }, () => fillString).join('');
  return `${ fill }${ str }${ fill }`;
}