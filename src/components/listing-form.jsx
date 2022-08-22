import React from 'react';
import {
  Paper,
  Typography,
  TextField,
  Box,
  Button,
  MenuItem,
} from '@mui/material';
import ListingService from '../services/houses-service';



const ListingForm = ({
  onSubmit,
  formTitle,
  submitText,
  color,
  initValues,
}) => {
  const [cities, setCities] = React.useState([]);
  const [title, setTitle] = React.useState(initValues?.title ?? '');
  const [city, setCity] = React.useState(initValues?.cityId ?? '');
  const [price, setPrice] = React.useState(initValues?.price ?? '');
  const [img, setImg] = React.useState(initValues?.img ?? '');
  const [description, setDescription] = React.useState(initValues?.description ?? '')

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      title,
      cityId: city,
      price: Number(price),
      img,
      description,
    });
  };

  React.useEffect(() => {
    (async () => {
      const fethedCities = await ListingService.fetchCities();
      setCities(fethedCities);
    })();
  }, []);

  return (
    <Paper component="form" sx={{ p: 3 }} onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ textAlign: 'center', p: 2 }}>{formTitle}</Typography>
      <Box sx={{
        display: 'flex', flexDirection: 'column', gap: 3, width: '30vw',
      }}
      >
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <TextField
          label="City"
          variant="outlined"
          select
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required  
        >
          {cities.map(({ id, title: cityTitle }) => (
            <MenuItem key={id} value={id}>{cityTitle}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Price"
          variant="outlined"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          required
        />
        <TextField
          label="Image URL"
          variant="outlined"
          value={img}
          onChange={(event) => setImg(event.target.value)}
          required
        />
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={5}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="outlined">
            {submitText}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ListingForm;
