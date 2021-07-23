import _ from 'lodash';

const sortLists = (list, path, order) => {
  const lists = _.orderBy(list, path, order);
  return lists;
};

export default sortLists;
