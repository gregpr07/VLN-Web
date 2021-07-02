export const formatRating = (num: number, decimals = 1) =>
  (Math.round(num * 100) / 100).toFixed(decimals);
