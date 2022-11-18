import axios from 'axios';

export const fetchApi = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=7f81b421d3976fbe9f06c97466f3842d&query=Chucky`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

fetchApi()
  .then(response => response.data)
  .then(console.log);
