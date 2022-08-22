const serverAddress = 'http://localhost:3000';

const formatHouse = ({
  id,
  title,
  description,
  price,
  img,
  cityId,
  city,
}) => ({
  id,
  title,
  description,
  price,
  img,
  cityId,
  city: city.title,
});

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/houses?_expand=city`);
  const houses = await response.json();

  return houses.map(formatHouse);
};

const create = async (houseProps) => {
  const response = await fetch(`${serverAddress}/houses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(houseProps),
  });

  const house = await response.json();

  return house;
};


const update = async (id, houseProps) => {
  const response = await fetch(`${serverAddress}/houses/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(houseProps),
  });

  const house = await response.json();

  return house;
};

const remove = async (id) => {
  await fetch(`${serverAddress}/houses/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const fetchCities = async () => {
  const response = await fetch(`${serverAddress}/cities`);
  const cities = await response.json();

  return cities;
};

const ListingService = {
  fetchAll,
  create,
  update,
  remove,
  fetchCities,
};

export default ListingService;