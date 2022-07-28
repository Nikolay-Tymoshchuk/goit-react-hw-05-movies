import { List, ListChild, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <List>
        <ListChild>
          <Link to="/">Home</Link>
        </ListChild>
        <ListChild>
          <Link to="/movies">Movies</Link>
        </ListChild>
      </List>
    </nav>
  );
};
