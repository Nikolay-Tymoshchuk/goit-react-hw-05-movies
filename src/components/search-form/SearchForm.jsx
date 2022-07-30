import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { SearchForm, Input, Button } from './SearchForm.styled';
import { BsSearch } from 'react-icons/bs';

const Form = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const request = search.trim();
    if (request.length === 0) {
      toast.error('Request could not be empty');
      setSearch('');
      return;
    }
    onSearch(request);
    setSearch('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter a movie name"
        onChange={e => setSearch(e.target.value)}
        value={search}
        required
      />
      <Button type="submit">
        <BsSearch />
      </Button>
    </SearchForm>
  );
};

Form.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Form;
