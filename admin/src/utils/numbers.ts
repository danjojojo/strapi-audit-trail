interface StringToNumberProps {
  value: string | null;
  returnedValueIfError: number;
  minCap?: number;
  maxCap?: number;
}

export function stringToNumber({
  value,
  returnedValueIfError,
  minCap,
  maxCap,
}: StringToNumberProps) {
  if (!value) return returnedValueIfError;

  let toReturn: number = 0;
  const toNumber = Number(value);

  toReturn = isNaN(toNumber) ? returnedValueIfError : toNumber;

  if (minCap) {
    toReturn = Math.max(toReturn, minCap);
  }

  if (maxCap) {
    toReturn = Math.min(toReturn, maxCap);
  }

  return toReturn;
}
