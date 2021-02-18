export const formatNumber = (n: number, frac = 0, max = 2) => {
  const intl = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: frac,
    maximumFractionDigits: max,
  })
  return intl.format(n)
}

export const fromDecimal = (value, dec) => {
  return value * Math.pow(10, dec);
}