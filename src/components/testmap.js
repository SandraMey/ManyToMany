import React, { useState } from 'react';
import { data } from '../data';
import './testcard.css';

const Testmap = () => {
  const [prix, setPrix] = useState(0);
  //console.log(data[0].price)
  //console.log(prix)

  const calculFinal = () => {
    console.log(data.length)
    let b = 0;
    for (let i = 0; i < data.length; i++) {
      b = data[i].price + b;
      console.log(b);
    }
    return b;
  };

  /* let prixTotalCalcul = [];
  for (let i = 0; i < data.length; i++){
    let prixProduitsDansLePanier = data[i].price;

    prixTotalCalcul.push(prixProduitsDansLePanier)

    console.log(prixTotalCalcul);
  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const prixTotal = prixTotalCalcul.reduce(reducer);

  console.log(prixTotal); */

  return (
    <div>
      <div className="testcard">
        {data
          /* .filter(
            (element) =>
              element.id === 15 ||
              element.id === 11 ||
              element.id === 12 ||
              element.id === 13 ||
              element.id === 14
          ) */
          .map((d) => {
            return (
              <div>
                <p>{d.name}</p>
                <p>{d.price}</p>
                <img src={d.photo} alt=""></img>
                <button>add</button>
                <div></div>
              </div>
            );
          })}
      </div>
      <div>{calculFinal()}</div>
      <div>prix final</div>
    </div>
  );
};

export default Testmap;

{
  /* <div className='lmj-cart'>
<button
    className='lmj-cart-toggle-button'
    onClick={() => setIsOpen(false)}
>
    Fermer
</button>
{cart.length > 0 ? (
    <div>
        <h2>Panier</h2>
        <ul>
            {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                        {name} {price}€ x {amount}
                </div>
            ))}
        </ul>
        <h3>Total :{total}€</h3>
        <button onClick={() => updateCart([])}>Vider le panier</button>
    </div>
) : (
    <div>Votre panier est vide</div>
)}
</div> */
}
