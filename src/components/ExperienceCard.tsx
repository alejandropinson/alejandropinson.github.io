import { Box, Typography } from '@mui/material';
import './ExperienceCard.css';

interface ExperienceCardProps {
  title: string;
  host: string;
  image: string;
}

const ExperienceCard = ({ title, host, image }: ExperienceCardProps) => (
  <Box width='100%'>
    <div
      className='ExperienceCardImage'
      style={{
        background: `url(${image})`,
      }}
    ></div>
    <Typography variant='subtitle1' color='primary' fontWeight={700}>
      {title}
    </Typography>
    <Typography variant='caption' color='primary'>
      x {host}
    </Typography>
  </Box>
);

export default ExperienceCard;
