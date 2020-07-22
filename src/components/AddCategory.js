import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function AddCategory({setCategories}) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue('');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="AddCategory">
      <form onSubmit={handleSubmit}>
        <h2>Add Category</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="escribe algo"
        />
      </form>
    </div>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
