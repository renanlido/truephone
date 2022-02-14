// import api from '../axios';
import axios from '../axios';
import { PostFile } from './types';

// export async function postFile(data: PostFile) {
//   const response = await axios.post<PostFile>(
//     'https://truephone-api.herokuapp.com/files/create',
//     data
//   );

//   return response.data;
// }

export async function postFile(data: PostFile) {
  const response = await axios.post('http://localhost:3333/files/create', {
    data
  });

  return response.data;
}

export async function getFiles() {
  const response = await axios.post<PostFile>('http://localhost:3333/get/all');

  return response.data;
}
