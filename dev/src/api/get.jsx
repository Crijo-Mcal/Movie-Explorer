const api_key = import.meta.env.TMDB_API_KEY;

/* movie */
export async function getMoviePage1(saveData, category, page = 1) {
  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?page=${page}&api_key=${api_key}`,
  );

  const data = await respose.json();
  saveData(data.results);
}

export async function getMovie(saveData, category, page = 1) {
  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?page=${page}&api_key=${api_key}`,
  );

  const data = await respose.json();
  saveData(data);
}

/* tv */
export async function getTvPage1(saveData, category, page = 1) {
  const respose = await fetch(
    `https://api.themoviedb.org/3/tv/${category}?page=${page}&api_key=${api_key}`,
  );

  const data = await respose.json();
  saveData(data.results);
}

/* get movie by id */
export async function getMovieById(saveData, id) {
  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`,
  );

  const data = await respose.json();
  saveData(data);
}

/* get movie by id */
export async function getTVById(saveData, id) {
  const respose = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`,
  );

  const data = await respose.json();
  saveData(data);
}

export async function getnumPages(saveData, category, type) {
  const respose = await fetch(
    `https://api.themoviedb.org/3/${type}/${category}?page=1&api_key=${api_key}`,
  );

  const data = await respose.json();
  if (data.total_pages >= 500) {
    saveData(500);
  } else {
    saveData(data.total_pages);
  }
}

export async function getmulti(saveData, name) {
  const respose = await fetch(
    `https://api.themoviedb.org/3/search/multi?page=1&api_key=${api_key}&query=${name}`,
  );

  const data = await respose.json();

  saveData(data.results);
}
