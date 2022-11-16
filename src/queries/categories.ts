import { useQuery } from '@tanstack/react-query';
import { getAllCategories } from '../api/categoryApi';

export const useCategories = () =>
  useQuery({ queryKey: ['categories'], queryFn: getAllCategories });
