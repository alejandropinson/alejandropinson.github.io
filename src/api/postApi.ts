import axios from 'axios';

export const getAllPosts = async (): Promise<any> => {
  const response = await axios.get<any>('api.example.com/v1/posts');

  return response.data;
};
