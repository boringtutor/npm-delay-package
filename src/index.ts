/**
 * given the number in milliseconds return the promise that is going to resolve
 * after that many number of milliseconds.
 * @param ms is in milliseconds
 * @returns
 */
export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
