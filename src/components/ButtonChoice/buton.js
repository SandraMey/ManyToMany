import React from 'react';
import { Link } from 'react-router-dom';

const ButtonChoice = ({svg,linkTo,choice,style}) => {
  return (
    <Link to={linkTo}>
    <div>
      <div className={choice}>
        <div className={style}>
         <div>{svg}</div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ButtonChoice;