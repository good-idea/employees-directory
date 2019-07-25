/* Higher order function, call this with a search term to
 * get a comparitor function */
export const compareSearchTerm = (term: string) => (value: string) =>
  value.toLowerCase().includes(term.toLowerCase())

/* from: https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type */
export function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  )
}
