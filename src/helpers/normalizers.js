const IMAGE_URL = 'https://image.tmdb.org/t/p/';

export const normalizerIncomingFilmData = film => {
  const { title, vote_average, release_date, overview, genres, poster_path } = film;
  const rating =
    (vote_average * 10) % 1 === 0
      ? Number(vote_average * 10) + '%'
      : (vote_average * 10).toFixed(1) + '%';
  const release = release_date.split('-')[0];
  const genre = genres.map(genre => genre.name).join(', ');
  const poster = `${IMAGE_URL}w300${poster_path}`;
  return {
    title,
    rating,
    release,
    overview,
    genres: genre,
    poster,
  };
};

export const normalizerIncomingActorsData = data => {
  return data.cast.map(({ id, character, original_name: name, profile_path }) => {
    const photo =
      profile_path !== null
        ? `${IMAGE_URL}original${profile_path}`
        : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png';
    return { id, character, name, photo };
  });
};

export const normalizerIncomingReviewsData = data => {
  return data.results.map(({ id, author, content, author_details: { avatar_path } }) => {
    const regex = '^/+[a-zA-Z0-9]+[.]+[a-z]+$';
    let avatar =
      avatar_path ?? 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png';

    if (avatar.match(regex)) {
      avatar = `${IMAGE_URL}original${avatar}`;
    }

    if (avatar.startsWith('/')) {
      avatar = avatar.substring(1);
    }

    return { id, author, content, avatar };
  });
};
