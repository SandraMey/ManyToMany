import React from 'react';
import ButtonChoice from './ButtonChoice/buton';
import imgWc from '../assets/wc.jpg';
import imgplumbing from '../assets/plumbing.jpg';
import imgtapis from '../assets/tapis.webp';
import imgbath from '../assets/bath.jpg';
import imgfloor from '../assets/floor.jpg'
import './work.css';

const Work = () => {

  return (
    <main className='work'>
      <h1>What type of work is involved?</h1>
      <div className="page">
        <p>2/5</p>
      </div>
      <div className="containerwork">
        <div className="containertitle">  
          <ButtonChoice
            choice={'wc'}
            style={`${"wc"}`}
            linkTo='/deepening'
            svg={<img src="https://cdn.manomano.com/images/images_products/820/T/53683_2.jpg" className='imgplumbing'></img>
            }/>
          <p className='titlework'>Toilets</p>
        </div>  
        <div className="containertitle">  
          <ButtonChoice
            choice={'shower'}
            style={`${"shower"}`}
            linkTo='/deepening'
            svg={<img src="https://cdn.manomano.com/images/images_products/3021291/T/15949727_4.jpg" className='imgplumbing'></img>
            }/>
          <p className='titlework'>Shower</p>
        </div>
        <div className="containertitle">  
          <ButtonChoice
            choice={'SPA'}
            style={`${"SPA"}`}
            linkTo='/deepening'
            svg={<img src="https://cdn.manomano.com/images/images_products/435501/T/3792165_1.jpg" className='imgplumbing'></img>
            }/>
          <p className='titlework'>Baths</p>
        </div>
        <div className="containertitle"> 
          <ButtonChoice
            choice={'floor'}
            style={`${"floor"}`}
            linkTo='/deepening'
            svg={<img src={imgfloor} className='imgplumbing'></img>
            }/>
          <p className='titlework'>Floor</p>
        </div>
        <div className="containertitle"> 
          <ButtonChoice
            choice={'accesories'}
            style={`${"accesories"}`}
            linkTo='/deepening'
            svg={<img src={imgtapis} className='imgplumbing'></img>
            }/>
          <p className='titlework'>Acessories</p>
        </div>
        <div className="containertitle"> 
          <ButtonChoice
            choice={'faucets'}
            style={`${"faucets"}`}
            linkTo='/deepening'
            svg={<img src={imgplumbing} className='imgplumbing'></img>
            }/>
          <p className='titlework'>Plumbing</p>
        </div>
      </div>
      <div className="buttonnext">
        <a href='/'>
          <button className="button">Prev</button>
        </a>
      </div>
  </main>
  )
};

export default Work;
