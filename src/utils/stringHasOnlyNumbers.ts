export default function stringHasOnlyNumbers(string: string): boolean {
  const regex = /^[0-9]+$/;
  return regex.test(string);
};
