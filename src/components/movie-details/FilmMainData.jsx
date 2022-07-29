import { ImageBox, FilmDataBox } from './MovieDetails.styled';
export const FilmMainData = ({ options }) => {
  const { poster, title, release, rating, genres, overview } = options;
  return (
    <FilmDataBox>
      <ImageBox>
        <img src={poster} alt={title} />
      </ImageBox>
      <div>
        <h2>
          {title} {`(${release})`}
        </h2>
        <p>User score: {rating}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </FilmDataBox>
  );
};
