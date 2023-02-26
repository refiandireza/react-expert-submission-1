import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCategory, setCategory } from '../states/categories/action';

function CategoryMenuMobile() {
  const { threads, category } = useSelector((states) => states);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (category.selectedCategory === e.target.value) {
      dispatch(clearCategory());
    } else {
      dispatch(setCategory(e.target.value));
    }
  };
  return (
    <div className="category-menu">
      <p>Popular Categories:</p>
      <div className="category-menu__list">
        {threads.map((thread) => (
          <button className={category.selectedCategory === thread.category ? 'active' : ''} key={thread.id} onClick={handleClick} type="button" value={thread.category}>{`#${thread.category}`}</button>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenuMobile;
