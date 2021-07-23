const onKeyNumber = (e) => {
  const regEx = /^[0-9.,]+$/;

  if (e.target.value.includes('.')) {
    const dec = e.target.value.split('.');
    if (_.get(dec, '[1].length') <= 1 && e.key !== '.') {
      console.log(_.get(dec, '[1].length'));
      return true;
    } else {
      e.preventDefault();
      return false;
    }
  }

  if (e.key === '.' && _.get(e.target.value, 'length') === 0) {
    e.preventDefault();
    return false;
  }

  if (e.key.match(regEx)) {
    return true;
  }

  e.preventDefault();
  return false;
};

export default onKeyNumber;
