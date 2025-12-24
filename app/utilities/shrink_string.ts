export function shrinkString(str: string, maxChars: number) {
  if (str.length <= maxChars) return str
  return str.slice(0, maxChars)
}
