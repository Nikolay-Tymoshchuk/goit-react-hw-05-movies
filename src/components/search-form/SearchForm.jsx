import { useState } from 'react';
import { toast } from 'react-toastify';
import { FormStyled } from './SearchForm.styled';

function Form({ onSearch }) {
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
    <FormStyled onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter a movie name"
        onChange={e => setSearch(e.target.value)}
        value={search}
        required
      />
      <button type="submit">Search</button>
    </FormStyled>
  );
}

export default Form;
