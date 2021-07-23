const dayjs = require('dayjs');

const display = (date, format = 'DD/MM/YYYY') => {
  return dayjs(date).format(format);
};

const server = (date) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export default { display, server };
