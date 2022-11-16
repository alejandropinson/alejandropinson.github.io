import axios from 'axios';
import { RootObject } from '../models/Category';

export const getAllCategories = async (): Promise<RootObject> => {
  const response = await axios.get<RootObject>(
    'https://www.marcoexperiences.com/api/experiences/explore_test'
  );

  return response.data;
};
