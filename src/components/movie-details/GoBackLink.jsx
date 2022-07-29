import PropTypes from 'prop-types';
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
  history: PropTypes.exact({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    state: PropTypes.object,
    key: PropTypes.string,
  }).isRequired,
};
