const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "a33c52a8eb2acfab9c71dec5ee9a0477",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
