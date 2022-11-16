import { Menu } from '@mui/icons-material';
import { Box, Chip, Grid, Typography } from '@mui/material';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import logoPNG from '../assets/images/marco_logo.png';
import { useCategories } from '../queries/categories';

const Home = () => {
  const navigate = useNavigate();
  const { data } = useCategories();
  const categories = data?.categories || [];
  const { categoryId } = useParams();

  const navigateToCategory = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <>
      <Box
        p={2}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        bgcolor='#0D0D0D'
      >
        <div>
          <img src={logoPNG} alt='logo' />
        </div>
        <Menu color='primary' />
      </Box>
      <Box bgcolor='#000' height='100%' display='flex' py={8}>
        <Grid container justifyContent='center'>
          <Grid item xs={11} md={9}>
            <Typography variant='h4' color='primary' mb={2} fontWeight={700}>
              Explore Experiences
            </Typography>
            <Box display='flex' mb={4} overflow='scroll'>
              {categories.map((category) => {
                const isActive = categoryId
                  ? category.id === categoryId
                  : false;

                return (
                  <Chip
                    color='primary'
                    variant={isActive ? 'filled' : 'outlined'}
                    label={category.title}
                    onClick={() => {
                      isActive
                        ? navigateHome()
                        : navigateToCategory(category.id);
                    }}
                    sx={{ flexShrink: 0, marginRight: 1, fontWeight: 700 }}
                  />
                );
              })}
            </Box>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
