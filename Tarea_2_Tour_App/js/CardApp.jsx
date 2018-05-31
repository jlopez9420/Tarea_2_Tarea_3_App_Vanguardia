import React from 'react';
import DepartmentCard from './Card';

const CardApp = props => (
  <div>
    {props.deptos.map(text => (
      <div>
        <DepartmentCard
          department={text.department}
          depimg={text.img}
          capital={text.capital}
          info={text.info}
          img={text.img}
          founded={text.founded}
          population={text.population}
        />
        <br />
      </div>
    ))}
  </div>
);

export default CardApp;
