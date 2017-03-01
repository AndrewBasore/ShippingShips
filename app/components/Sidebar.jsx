import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {

  const categories = props.category.categories;
  console.log('================this is categories', categories)
  return (
    <div>
      <img src="" className="logo" />
      {categories.map((category) => {
        return (
        <div key={category}>
        <section>
          <h4 className="menu-item active">
            <Link to='/category' onClick={()=>{props.onClick(category)}}>{category}</Link>
          </h4>
        </section>
        </div>
        )
      })}

    </div>
  );
}

export default Sidebar;
