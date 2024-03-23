export function percent_format(val: number) {
  return (val/100).toLocaleString(undefined, { style: 'percent', maximumFractionDigits: 1 });
}