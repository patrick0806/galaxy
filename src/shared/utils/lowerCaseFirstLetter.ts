export function lowerCaseFirstLetter(inputString: string): string {
  if (inputString.length === 0) {
    return inputString;
  }
  return inputString.charAt(0).toLowerCase() + inputString.slice(1);
}
