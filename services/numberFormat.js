const numberFormat = (num, d = 2) => {
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: d, maximumFractionDigits: d }).format(num ? num : 0.0);
};

export default numberFormat;
