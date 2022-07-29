import PropTypes from 'prop-types';
import { AdditionalInfo, List, AdditionalInfoLink } from './MovieDetails.styled';

export const AdditionalInformation = ({ history }) => {
  return (
    <AdditionalInfo>
      <h4>Additional information</h4>
      <List>
        <li>
          <AdditionalInfoLink to={'cast'} state={{ from: history }}>
            Cast
          </AdditionalInfoLink>
        </li>
        <li>
          <AdditionalInfoLink to={'reviews'} state={{ from: history }}>
            Reviews
          </AdditionalInfoLink>
        </li>
      </List>
    </AdditionalInfo>
  );
};

AdditionalInformation.propTypes = {
  history: PropTypes.exact({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    state: PropTypes.object,
    key: PropTypes.string,
  }).isRequired,
};
