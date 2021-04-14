import axios from 'axios';
import API from '../variables/key';

const fetchImages = ({ searchQuery, page }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};
/* eslint-disable */
export default { fetchImages };
