export const formatNumber = (n: number, frac = 0, max = 2) => {
  const intl = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: frac,
    maximumFractionDigits: max,
  })
  return intl.format(n)
}
