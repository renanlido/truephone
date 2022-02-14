import api from '../axios';
import { PostFile } from './types';

export const postFile = async (data: PostFile) => {
  const response = await api.post<PostFile>('/files/create', data);

  return response;
};
