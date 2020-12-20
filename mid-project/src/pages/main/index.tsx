import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import _ from 'lodash/fp';

//import backgroundImg from './images/background.jpg';
import img1 from './images/img1.webp';
import img2 from './images/img2.webp';
import img3 from './images/img3.webp';
import img4 from './images/img4.webp';
import img5 from './images/img5.webp';
import { Button } from 'antd';

interface Props {}

const MainPage = (props: Props) => {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-block">
          <h2 className="content-header big">Projects + Specs</h2>
          <h3 className="content-header">
            The latest projects with product specifications
          </h3>
          <div className="content-main">
            <div className="photos">
              <div className="photo">
                <img src={img1} width="100%" height="100%" />
              </div>
              <div className="photo">
                <img src={img2} width="24%" height="100%" />
                <img src={img3} width="24%" height="100%" />
                <img src={img4} width="24%" height="100%" />
                <img src={img5} width="24%" height="100%" />
              </div>
            </div>
            <div className="description">
              <h1 className="description-header">Old Town Modern</h1>
              <p className="description-designers">
                By dSPACE Studio • Private Houses • Old Town, Chicago, IL, USA •
                2016
              </p>
              <p className="description-info">
                This Old Town home was built in 1972. Designed by Bruce Graham,
                architect of the Sears Tower, it remained unaltered by the
                original owner until our client purchased it. The exterior had
                deteriorated beyond repair and the interior needed a new floor.
              </p>
              <div className="description-block">
                <h5 className="description-header">Product spec sheet</h5>
                <h6 className="orange">
                  Fireplace and Wall cladding, Kitchen Backsplash
                </h6>
                <h6 className="black">
                  Kitchen Backsplash, Pearl Grey Marbleby Stone Source
                </h6>
                <h6 className="orange">Kitchen peninsula sconce</h6>
                <h6 className="black">Arc Wall lamp 33“ by Allied Maker</h6>
                <h6 className="orange">Kitchen and North Bar countertop</h6>
                <h6 className="black">Silver lake by DIFINITI</h6>
                <h6 className="orange">Fireplace</h6>
                <h6 className="black">Birmingham 36 by Heatilator - Wood</h6>
                <h6 className="orange">4 panel sliding door</h6>
                <h6 className="black">Windsor Windows and Doors</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
