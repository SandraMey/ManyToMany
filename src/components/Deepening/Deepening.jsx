import React from 'react';
import ButtonChoice from '../ButtonChoice/buton';

import './deepening.css';

const Deepening = () => {
  return (
    <main className='work'>
    <h1>Do you want to? </h1>
    <div className="page">
      <p>3/5</p>
    </div>
    <div className="containerwork">
      <div className="containertitle">  
        <ButtonChoice
          choice={'create'}
          style={`${"create"}`}
          linkTo='/level'
          svg={<img src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-documents-project-work-icongeek26-outline-colour-icongeek26-1.png" alt="" className='imgplumbing'></img>
          }/>
        <p className='titlework'>Do It Yourself</p>
      </div>  
      <div className="containertitle">  
        <ButtonChoice
          choice={'renovation'}
          style={`${"renovation"}`}
          linkTo='/level'
          svg={<img src="https://img.icons8.com/external-flat-juicy-fish/60/000000/external-diy-gears-and-cogs-flat-flat-juicy-fish.png" alt="" className='imgplumbing'></img>
          }/>
        <p className='titlework'>Renovation</p>
      </div>
    </div>
    <div className="buttonnext">
      <a href='/work'>
        <button className="button">Prev</button>
      </a>
    </div>
</main>
)};

export default Deepening;
