// import api from '../axios';
import axios from '../axios';
import { PostFile } from './types';

export async function postFile(data: PostFile) {
  const response = await axios.post<PostFile>('/files/create', { data });

  return response.data;
}
