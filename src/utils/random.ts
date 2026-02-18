export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomMatrix(
  rows: number,
  columns: number,
  min: number,
  max: number,
): number[][] {
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => getRandomNumber(min, max)),
  );
}
