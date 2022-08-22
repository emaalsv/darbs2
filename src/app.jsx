import * as React from 'react';
import { Box,  Modal } from '@mui/material';
import HousesService from './services/houses-service';
import { AddNewListing, HouseCard, ListingForm } from './components';
import { grey, red } from '@mui/material/colors';

const App = () => {
  const [houses, setHouses] = React.useState([]);
  const [houseBeingEdited, setHouseBeingEdited] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const closeModal = () => {
    setModalOpen(false);
    setHouseBeingEdited(null);
  };
  const fetchAllHouses = async () => {
    const fetchedHouses = await HousesService.fetchAll();
    setHouses(fetchedHouses);
  };

  const createHouse = async (houseProps) => {
    await HousesService.create(houseProps);
    await fetchAllHouses();
  };

  const editHouse = (id) => {
    const foundHouse = houses.find((house) => house.id === id);
    setHouseBeingEdited(foundHouse);
    setModalOpen(true);
  };

  const updateHouse = async (houseProps) => {
    await HousesService.update(houseBeingEdited.id, houseProps);
    await fetchAllHouses();
    closeModal();
  };

  const removeHouse = async (id) => {
    await HousesService.remove(id);
    fetchAllHouses();
  };

  React.useEffect(() => {
    fetchAllHouses();
  }, []);

  return (
    <Box>
      <AddNewListing borderRadius="50%" openModal={() => setModalOpen(true)} />
    <Box sx={{
      gap: { xs: 4, xxl: 0 },
      pt: 2,
      px: 2,
    }}
    >
      <Modal open={modalOpen} onClose={closeModal}>
        <Box sx={{
          position: 'absolute',
          backgroundColor: grey[300],
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        >
          <ListingForm
            onSubmit={houseBeingEdited ? updateHouse : createHouse}
            formTitle={houseBeingEdited ? 'Edit Listing' : 'New Listing'}
            submitText={houseBeingEdited ? 'Renew listing' : 'Create'}
            color={houseBeingEdited ? 'warning' : 'success'}
            initValues={houseBeingEdited}
            backgroundColor={red}
          />
        </Box>
      </Modal>

      <Box>
        <Box sx={{
          p: 1,
          width: '100%',
        }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column-reverse',
          }}
          >
        {houses.map(({
          id,
          title,
          description,
          city,
          price,
          img,
        }) => (
          <Box key={id} item xs={6} md={5} xl={5}>
            <HouseCard
              title={title}
              description={description}
                  img={img}
                  city={city}
                  price={price}
                  onDelete={() => removeHouse(id)}
                  onEdit={() => editHouse(id)}
            />
          </Box>
        ))}
      </Box>
      </Box>
    </Box>
    </Box>
    </Box>
  );
};

export default App;
