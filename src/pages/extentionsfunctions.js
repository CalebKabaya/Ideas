import axios from 'axios';
import { result } from 'lodash';

export async function authentication() {
  console.log('sdsdsfgdfdfdfdfdfddf');
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let raw = {
    userName: '8d80a1c8a4ff4163972f944d4d2de0a5',
    password: '7d2b8419ac2646819',
  };

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  let data;

  const res = await axios.post('https://developer.britam.com/api/Authentication/login', raw).then((response) => {
    console.log(response.data);
    data = response.data;
  });
  console.log(data, ' Before');
  return data;
}
