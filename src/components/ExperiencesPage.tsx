import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCategories } from '../queries/categories';
import ExperienceCategoryCarousel, {
  ExperienceCategoryCarouselDisplayMode,
} from './ExperienceCategoryCarousel';

const ExperiencesPage = () => {
  const navigate = useNavigate();
  const { data } = useCategories();
  const categories = data?.categories || [];

  const navigateToCategory = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <Box>
      {categories.map((category) => (
        <Box mb={8}>
          <ExperienceCategoryCarousel
            title={category.title}
            items={category.items.slice(0, 4)}
            onTitleClick={() => navigateToCategory(category.id)}
            displayMode={ExperienceCategoryCarouselDisplayMode.Horizontal}
          />
        </Box>
      ))}
    </Box>
  );
};
export default ExperiencesPage;
