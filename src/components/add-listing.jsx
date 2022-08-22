import React from 'react';
import {
  Button,
  Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddNewListing = ({ openModal }) => (
  <Paper sx={{ mb: 2, p: 2, bgcolor: 'common.white' }}>
    <Button variant="outlined" color="primary" onClick={openModal} endIcon={<AddIcon />}>Add Listing</Button>
  </Paper>

);

export default AddNewListing;
