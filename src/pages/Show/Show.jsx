import React from 'react';
import './Show.css';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const bnr_1_desk = require('../../assets/images/bnr_1_desk.jpg');
const bnr_2_desk = require('../../assets/images/bnr_2_desk.jpg');
const bnr_3_desk = require('../../assets/images/bnr_3_desk.jpg');
const bnr_4_desk = require('../../assets/images/bnr_4_desk.jpg');
const bnr_5_desk = require('../../assets/images/bnr_5_desk.jpg');
const bnr_6_desk = require('../../assets/images/bnr_6_desk.jpg');
const bnr_7_desk = require('../../assets/images/bnr_7_desk.jpg');
const bnr_8_desk = require('../../assets/images/bnr_8_desk.jpg');
const bnr_9_desk = require('../../assets/images/bnr_9_desk.jpg');
const bnr_10_desk = require('../../assets/images/bnr_10_desk.jpg');
const brod_1 = require('../../assets/images/brod_1.png');
const brod_2 = require('../../assets/images/brod_2.png');
const brod_3 = require('../../assets/images/brod_3.png');
const brod_4 = require('../../assets/images/brod_4.png');
const brodcast = require('../../assets/images/brodcast.png');

const Show = () => {
  return (
    <>
      <div>
        <div className="container-fluid p-0 m-0">
          <section>
            <div className="row">
              <div className="col-sm-12 col-12">
                <Link to="/show-form">
                  <Image src={bnr_1_desk} className="img-fluid desk" />
                </Link>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-12 col-12">
                <Image src={bnr_2_desk} className="img-fluid desk" />
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-12 col-12">
                <Image src={bnr_3_desk} className="img-fluid desk" />
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-12 col-12">
                <Image src={bnr_4_desk} className="img-fluid desk" />
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-12 col-12">
                <Image src={bnr_5_desk} className="img-fluid desk" />
              </div>
            </div>
          </section>
          <section className="slide" style={{ backgroundImage: `url(${bnr_6_desk})` }}>
            <div className="row">
              <div className="col-sm-12 col-12 text-center">
                <Image src={brodcast} className="img-fluid brodcc" />
              </div>
            </div>
            <div className="row">
              <div className="container">
                <div className="col-sm-12 col-12">
                  <div id="speaker" style={{ padding: '30px 0' }}>
                    <marquee>
                      <div style={{ height: '100px', width: '270px', display: 'inline-flex' }}>
                        <Image src={brod_1} className="img-fluid" />
                      </div>
                      <div style={{ height: '100px', width: '270px', display: 'inline-flex' }}>
                        <Image src={brod_2} className="img-fluid" />
                      </div>
                      <div style={{ height: '100px', width: '270px', display: 'inline-flex' }}>
                        <Image src={brod_3} className="img-fluid" />
                      </div>
                      <div style={{ height: '100px', width: '270px', display: 'inline-flex' }}>
                        <Image src={brod_4} className="img-fluid" />
                      </div>
                    </marquee>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-12 col-12">
                <Image src={bnr_7_desk} className="img-fluid desk" />
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-12 col-12">
                <Image src={bnr_8_desk} className="img-fluid desk" />
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-12 col-12">
                <Image src={bnr_9_desk} className="img-fluid desk" />
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-12 col-12">
                <Link to="/show-form" target="_blank">
                  <Image src={bnr_10_desk} className="img-fluid desk" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Show;