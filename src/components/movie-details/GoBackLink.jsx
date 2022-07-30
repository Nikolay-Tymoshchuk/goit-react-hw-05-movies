import { string, oneOfType, shape } from 'prop-types';
import { GoBack } from './MovieDetails.styled';
import { HiArrowLeft } from 'react-icons/hi';

export const GoBackLink = ({ history }) => {
  return (
    <GoBack to={history}>
      <HiArrowLeft size="24" />
      GO BACK
    </GoBack>
  );
};

GoBackLink.propTypes = {
  history: oneOfType([
    string,
    shape({
      pathname: string.isRequired,
      search: string.isRequired,
    }),
  ]).isRequired,
};
