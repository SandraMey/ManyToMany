import React from 'react';
import ButtonChoice from './ButtonChoice/buton';
import './budget.css';

const Budget = () => {
  return (
    <main className='budget'>
      <h1>budget</h1>
      <div className="container">
            <ButtonChoice
              choice={''}
              style={`${""}`}
              linkTo='/'
              svg={
                <svg aria-hidden="true" focusable="false" height="6rem" role="presentation" width="6rem" viewBox="0 0 24 24" data-testid="family-icon-Bathroom" ><path fill="#1D9E9F" d="M4.751 12.647V4.574a2.574 2.574 0 015.149 0v.468H8.613v-.61a1.206 1.206 0 10-2.412.003l.03 8.212h-1.48z"></path><path fill="#1E3C87" d="M9.782 4.814H8.684c-.747 0-1.359.611-1.359 1.359v.787c0 .2.164.364.364.364h3.089c.2 0 .363-.164.363-.364v-.787c0-.748-.612-1.36-1.36-1.36zM20.249 12.993H3.75c-.413 0-.751-.35-.751-.778v-.14c0-.428.338-.778.751-.778H20.25c.413 0 .751.35.751.777v.141c0 .428-.338.778-.751.778z"></path><path fill="#1D9E9F" d="M8.584 19.094l-.118-.069a.76.76 0 00-1.034.278l-.836 1.447a.76.76 0 00.277 1.034l.119.069a.76.76 0 001.034-.278l.835-1.447a.76.76 0 00-.277-1.034zM17.479 21.746l.108-.083a.76.76 0 00.143-1.061l-1.015-1.328a.76.76 0 00-1.061-.142l-.109.083a.76.76 0 00-.142 1.061l1.015 1.328a.76.76 0 001.06.142z"></path><path fill="#1E3C87" d="M16.218 20.157H7.782C5.152 20.157 3 18 3 15.364v-1.228c0-.293.24-.534.533-.534h16.934c.294 0 .533.24.533.534v1.228c0 2.636-2.152 4.793-4.782 4.793z"></path></svg>
              }/>
        </div>
  </main>
  )
};

export default Budget;