import { ChevronRight } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Item } from '../models/Category';
import ExperienceCard from './ExperienceCard';

export enum ExperienceCategoryCarouselDisplayMode {
  Horizontal = 0,
  Vertical = 1,
}

interface ExperienceCategoryCarouselProps {
  title: string;
  items: Item[];
  onTitleClick: () => void;
  displayMode?: ExperienceCategoryCarouselDisplayMode;
}

const ExperienceCategoryCarousel = ({
  title,
  items,
  onTitleClick,
  displayMode = ExperienceCategoryCarouselDisplayMode.Vertical,
}: ExperienceCategoryCarouselProps) => (
  <Box>
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      mb={2.5}
      onClick={onTitleClick}
    >
      <Typography variant='h5' color='primary' fontWeight={700}>
        {title}
      </Typography>
      <IconButton>
        <ChevronRight color='primary' />
      </IconButton>
    </Box>
    <Grid
      container
      sx={
        displayMode === ExperienceCategoryCarouselDisplayMode.Horizontal
          ? { flexWrap: 'nowrap', overflow: 'scroll' }
          : {}
      }
      spacing={3}
    >
      {items.map((item) => (
        <Grid
          item
          xs={
            displayMode === ExperienceCategoryCarouselDisplayMode.Horizontal
              ? 9
              : 12
          }
          md={3}
          sx={
            displayMode === ExperienceCategoryCarouselDisplayMode.Horizontal
              ? { flexShrink: 0 }
              : {}
          }
        >
          <ExperienceCard
            image={item.img}
            title={item.title}
            host={item.host}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ExperienceCategoryCarousel;
