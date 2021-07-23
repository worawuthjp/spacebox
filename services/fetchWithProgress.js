import _ from 'lodash';
import Router from 'next/router';

const fetchWithProgress = async ({
  method,
  url,
  setPercent,
  body = null,
  header = {
    Accept: '*/*',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  onSuccess,
  onErrors,
}) => {
  try {
    const requestOptions = {
      method: method,
      mode: 'cors',
      headers: header,
    };
    body !== null ? (requestOptions.body = body) : null;
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = (event) => {
      console.log(event);
      const percentage = parseInt((event.loaded / event.total) * 100);
      console.log(percentage === 100 ? 99 : percentage);
      setPercent(percentage === 100 ? 99 : percentage);
    };
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 401) {
        Router.push('/login');
      }
      if (xhr.status !== 200) {
        onErrors({ errors: true });
      }
      setPercent(100);
      console.log(100);
      onSuccess(JSON.parse(xhr.response));
    };

    xhr.open(method, url, true);
    _.forEach(_.keys(header), (name) => {
      xhr.setRequestHeader(name, header[name]);
    });
    xhr.send(body);
  } catch (error) {
    return error;
  }
};

export default fetchWithProgress;
