import axios from 'axios';

export const fetchPictures = async () => {
  const response = axios.get(
    `https://pixabay.com/api/?q=cat&page=1&key=41535540-3e2fcae5f9a93b6d79476b27b&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default {
  fetchPictures,
};

// import axios from "axios";

// export const fetchArticlesWithQuery = async searchQuery => {
//   const response = axios.get(`/search?query=${searchQuery}`);
//   return response.data.hits;
// };

// export default {
//   fetchArticlesWithQuery,
// };
