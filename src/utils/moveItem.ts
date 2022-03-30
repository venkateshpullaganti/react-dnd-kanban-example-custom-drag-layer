export const moveItem = <T>(array: T[], from: number, to: number) => {
  const clone = [...array];
  const startIndex = to < 0 ? clone.length + to : to;
  const item = clone.splice(from, 1)[0];
  clone.splice(startIndex, 0, item);
  return clone;
};
