import Router from 'next/router';

const fetchApi = async (
  method,
  url,
  body = null,
  header = {
    Accept: '*/*',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }
) => {
  try {
    const requestOptions = {
      method: method,
      mode: 'cors',
      headers: header,
    };
    body !== null ? (requestOptions.body = body) : null;
    const res = await fetch(url, requestOptions);
    if (res.status === 401) {
      Router.push('/login');
    }

    return await res.json();
  } catch (error) {
    return error;
  }
};

export default fetchApi;
