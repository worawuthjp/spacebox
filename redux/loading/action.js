import actionType from './actionType';

export function setLoading(isLoading) {
  return { type: actionType.SET_LOADING,isLoading };
}
