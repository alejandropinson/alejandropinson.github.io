import { Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useCategories } from '../queries/categories';
import ExperienceCategoryCarousel from './ExperienceCategoryCarousel';

const CategoryPage = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { data } = useCategories();
  const category = (data?.categories || []).find(({ id }) => id === categoryId);

  const navigateToCategory = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <>
      <Box>
        <Box mb={8}>
          {category && (
            <ExperienceCategoryCarousel
              title={category.title}
              items={category.items}
              onTitleClick={() => navigateToCategory(category.id)}
            />
          )}
        </Box>
      </Box>
    </>
  );
};
export default CategoryPage;
