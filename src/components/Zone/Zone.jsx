import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonChoice from '../ButtonChoice/buton';
import garage from '../../assets/garage-svgrepo-com.svg';

import './zone.css';

const Zone = () => {
  
  return (
    <main className="zone">
      <h1>In which area do you want to craft ?</h1>
      <div className="page">
        <p>1/5</p>
      </div>
      <div className="containerzone">
        <div className="containertitle">
          <ButtonChoice
            choice={'bathroom'}
            style={`${'insidebathroom'}`}
            linkTo="/work"
            svg={
              <svg
                aria-hidden="true"
                focusable="false"
                height="6rem"
                role="presentation"
                width="6rem"
                viewBox="0 0 24 24"
                data-testid="family-icon-Bathroom"
              >
                <path
                  fill="#1D9E9F"
                  d="M4.751 12.647V4.574a2.574 2.574 0 015.149 0v.468H8.613v-.61a1.206 1.206 0 10-2.412.003l.03 8.212h-1.48z"
                ></path>
                <path
                  fill="#1E3C87"
                  d="M9.782 4.814H8.684c-.747 0-1.359.611-1.359 1.359v.787c0 .2.164.364.364.364h3.089c.2 0 .363-.164.363-.364v-.787c0-.748-.612-1.36-1.36-1.36zM20.249 12.993H3.75c-.413 0-.751-.35-.751-.778v-.14c0-.428.338-.778.751-.778H20.25c.413 0 .751.35.751.777v.141c0 .428-.338.778-.751.778z"
                ></path>
                <path
                  fill="#1D9E9F"
                  d="M8.584 19.094l-.118-.069a.76.76 0 00-1.034.278l-.836 1.447a.76.76 0 00.277 1.034l.119.069a.76.76 0 001.034-.278l.835-1.447a.76.76 0 00-.277-1.034zM17.479 21.746l.108-.083a.76.76 0 00.143-1.061l-1.015-1.328a.76.76 0 00-1.061-.142l-.109.083a.76.76 0 00-.142 1.061l1.015 1.328a.76.76 0 001.06.142z"
                ></path>
                <path
                  fill="#1E3C87"
                  d="M16.218 20.157H7.782C5.152 20.157 3 18 3 15.364v-1.228c0-.293.24-.534.533-.534h16.934c.294 0 .533.24.533.534v1.228c0 2.636-2.152 4.793-4.782 4.793z"
                ></path>
              </svg>
            }
          />
          <p className="titlecraft">Bathroom</p>
        </div>
        <div className="containertitle">
          <ButtonChoice
            choice={'kitchen'}
            style={`${'insidekitchen'}`}
            linkTo="/work"
            svg={
              <svg
                aria-hidden="true"
                focusable="false"
                height="6rem"
                role="presentation"
                width="6rem"
                viewBox="0 0 24 24"
                data-testid="family-icon-Kitchen"
              >
                <path
                  fill="#1E3C87"
                  d="M10.7 7.5a3.85 3.85 0 11-7.7 0 3.85 3.85 0 017.7 0zM20.428 7.5a3.85 3.85 0 11-7.7 0 3.85 3.85 0 017.7 0z"
                ></path>
                <path
                  fill="#1E3C87"
                  d="M15.656 6.189a4.189 4.189 0 11-8.378 0 4.189 4.189 0 018.378 0z"
                ></path>
                <path
                  fill="#1E3C87"
                  d="M15.672 18.358h-8.41c-.6 0-1.086-.487-1.086-1.088V7.16h10.583v10.11c0 .6-.487 1.088-1.087 1.088z"
                ></path>
                <path
                  fill="#1D9E9F"
                  d="M15.863 21.911H7.07a.896.896 0 01-.896-.895v-1.14c0-.464.377-.841.842-.841h8.9c.465 0 .842.377.842.842v1.139c0 .495-.401.895-.896.895zM9.096 15.61a.348.348 0 01-.348-.349v-2.733a.348.348 0 01.696 0v2.733a.348.348 0 01-.348.348zM11.579 15.61a.348.348 0 01-.349-.349v-2.733a.348.348 0 01.697 0v2.733a.348.348 0 01-.348.348zM13.838 15.61a.348.348 0 01-.348-.349v-2.733a.348.348 0 01.696 0v2.733a.348.348 0 01-.348.348z"
                ></path>
              </svg>
            }
          />
          <p className="titlecraft">Kitchen</p>
        </div>
        <div className="containertitle">
          <ButtonChoice
            choice={'livingroom'}
            style={`${'insidelivingroom'}`}
            linkTo="/work"
            svg={
              <svg
                aria-hidden="true"
                focusable="false"
                height="6rem"
                role="presentation"
                width="6rem"
                viewBox="0 0 24 24"
                data-testid="family-icon-HomeAndLiving"
                class="svg_9c8206b6 Menu_menuFamilyItemLinkIcon__KNwwp"
              >
                <path
                  fill="#1E3C87"
                  d="M19.202 10.614v1.932c0 .739-.538 1.338-1.2 1.338H5.941c-.663 0-1.2-.599-1.2-1.338v-1.932c0-.744-.542-1.347-1.21-1.347H3.21C2.542 9.267 2 9.87 2 10.614v5.087c0 .744.542 1.348 1.21 1.348l.238 1.615c.033.221.205.384.406.384.202 0 .374-.162.407-.384l.239-1.615h14.944l.239 1.615c.032.221.204.384.406.384.201 0 .373-.162.406-.384l.239-1.615c.668 0 1.21-.604 1.21-1.348v-5.087c0-.744-.542-1.347-1.21-1.347h-.323c-.668 0-1.21.603-1.21 1.347z"
                ></path>
                <path
                  fill="#1D9E9F"
                  d="M18.172 5h-5.443a.536.536 0 00-.536.536v7.398c0 .296.24.536.536.536H18a.757.757 0 00.758-.758v-2.236c0-.513.232-.974.603-1.279.314-.257.476-.655.476-1.06v-1.47c0-.92-.746-1.667-1.666-1.667zM11.214 13.47c.296 0 .536-.24.536-.536V5.536A.536.536 0 0011.214 5H5.772c-.92 0-1.667.746-1.667 1.667v1.69c0 .326.179.61.437.81.393.303.643.778.643 1.31v2.235c0 .419.339.758.757.758"
                ></path>
              </svg>
            }
          />
          <p className="titlecraft">Living Room</p>
        </div>
        <div className="containertitle">
          <ButtonChoice
            choice={'dinnerroom'}
            style={`${'insidedinnerroom'}`}
            linkTo="/work"
            svg={
              <svg
                aria-hidden="true"
                focusable="false"
                height="6rem"
                role="presentation"
                width="6rem"
                viewBox="0 0 24 24"
                data-testid="family-icon-Lighting"
                class="svg_9c8206b6 Menu_menuFamilyItemLinkIcon__KNwwp"
              >
                <path
                  fill="#1E3C87"
                  d="M16.896 19.322h-8.92c-.818 0-1.482.663-1.482 1.482v1.147h11.884v-1.147c0-.819-.664-1.482-1.482-1.482z"
                ></path>
                <path
                  fill="#1D9E9F"
                  d="M11.436 19.322h2v-8.334h-2v8.334zM15.372 14.47h.559v-3.482h-.56v3.482z"
                ></path>
                <path
                  fill="#1E3C87"
                  d="M16.596 14.935a.945.945 0 11-1.89 0 .945.945 0 011.89 0zM7.004 11.966h10.865c.67 0 1.15-.564.963-1.127l-2.743-8.207C15.963 2.257 15.57 2 15.126 2H9.82c-.443 0-.833.254-.961.626l-2.816 8.207c-.194.564.289 1.133.961 1.133z"
                ></path>
              </svg>
            }
          />
          <p className="titlecraft">Dinner Room</p>
        </div>
        <div className="containertitle">
          <div className="garage ">
            <div className="insidegarage ">
              <Link to="/work">
                <img src={garage} />
              </Link>
            </div>
          </div>
          <p className="titlecraft">Garage</p>
        </div>
        <div className="containertitle">
          <ButtonChoice
            choice={'garden'}
            style={`${'insidegarden'}`}
            linkTo="/work"
            svg={
              <svg
                aria-hidden="true"
                focusable="false"
                height="6rem"
                role="presentation"
                width="6rem"
                viewBox="0 0 24 24"
                data-testid="family-icon-Garden"
              >
                <path
                  fill="#1E3C87"
                  d="M17.793 10.817H6.243a.565.565 0 00-.452.204.597.597 0 00-.125.49l.362 2.304a.842.842 0 00.794.692h.14L7.625 21a1.16 1.16 0 001.1 1h6.49c.509-.01.95-.364 1.08-.868v-.02l.748-6.593h.096a.857.857 0 00.82-.701l.409-2.309a.577.577 0 00-.119-.493.548.548 0 00-.456-.199z"
                ></path>
                <path
                  fill="#1D9E9F"
                  d="M17.949 3.555a.363.363 0 00-.406-.411c-.871.103-2.512.448-3.654 1.595-1.127 1.132-1.502 2.763-1.625 3.655a.395.395 0 00.443.449c.881-.11 2.488-.462 3.611-1.59 1.145-1.15 1.513-2.817 1.63-3.698zM10.157 7.65a.378.378 0 00.446-.433c-.14-.858-.536-2.364-1.64-3.47-1.168-1.167-2.836-1.594-3.69-1.743a.296.296 0 00-.342.335c.122.83.5 2.432 1.66 3.591 1.112 1.114 2.681 1.554 3.566 1.72z"
                ></path>
              </svg>
            }
          />
          <p className="titlecraft">Garden</p>
        </div>
      </div>
    </main>
  );
};

export default Zone;
