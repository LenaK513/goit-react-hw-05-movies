import axios from 'axios';

export const fetchApi = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3//trending/all/day??api_key=7f81b421d3976fbe9f06c97466f3842d`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

fetchApi()
  .then(response => response.data)
  .then(console.log);
