import { useQuery } from '@tanstack/react-query';
import { getAllPosts } from '../api/postApi';

export const usePosts = () =>
  useQuery({ queryKey: ['posts'], queryFn: getAllPosts });
