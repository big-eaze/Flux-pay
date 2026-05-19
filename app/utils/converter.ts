export function usdToBtc(value: string, rate: number) {
  const n = parseFloat(value.replace(/,/g, ""));
  return isNaN(n) ? "" : (n / rate).toFixed(6);
}

export function btcToUsd(value: string, rate: number) {
  const n = parseFloat(value);
  return isNaN(n)
    ? ""
    : (n * rate).toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });
}