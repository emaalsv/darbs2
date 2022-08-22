import * as React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Image from './image';
import TypographyLimited from './typography-limited';


const HouseCard = ({
  title,
  img,
  description,
  city,
  price,
  onDelete,
  onEdit,
}) => (
  <Card sx={{
    p: 1,
    display: 'flex',
    margin: '10px',
  }}
  >
    <Box sx={{ position: 'relative', width: '290px', height: '290px' }}>
      <Image
        src={img} 
      />
    </Box>
    <CardContent sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '100%',
    }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <Typography variant="h6" component="div">{title}</Typography>
        <Typography variant="h6" component="div">{`${price} €`}</Typography>
      </Box>
      <Typography mt={1} sx={{
        color: '#808080'
      }}>{city}</Typography>
      <TypographyLimited mt={2} sx={{
        color: '#808080'
      }}>{description}</TypographyLimited>
      <Box display="flex" justifyContent="flex-start">
        <Box display="flex" justifyContent="center" >
          <IconButton
            size="large"
            onClick={onEdit}
          >
            <EditIcon />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="center" >
          <IconButton
            size="large"
            onClick={onDelete}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default HouseCard;
