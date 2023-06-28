export async function getData(query, page, perPage) {
  const SRC_URL = 'https://pixabay.com/api';
  const API_KEY = '35668361-6ed5c81517d8d0bc1dc269174';

  const response = await fetch(
    `${SRC_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal`
  );
  const images = await response.json();
  return images;
}
