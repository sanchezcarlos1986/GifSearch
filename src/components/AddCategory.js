import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function AddCategory({setCategories}) {
  const [inputValue, setInputValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue('');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category</h2>
      <input
        type="text"
        defaultValue={inputValue}
        onChange={handleChange}
        placeholder="escribe algo"
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
