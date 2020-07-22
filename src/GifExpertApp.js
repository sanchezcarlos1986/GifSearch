import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export default function GifExpertApp({defaultCategories = []}) {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div className="GifExpertApp">
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </div>
  );
}
